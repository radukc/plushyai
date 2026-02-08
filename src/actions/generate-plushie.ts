"use server";

import { headers } from "next/headers";
import { openrouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";
import { auth } from "@/lib/auth";
import {
  APP_CONFIG,
  CREDIT_COSTS,
  PLUSHIE_STYLES,
  GENERATION_QUALITY_OPTIONS,
} from "@/lib/constants";
import { db } from "@/lib/db";
import { generation } from "@/lib/schema";
import { upload } from "@/lib/storage";
import {
  ensureSubscription,
  consumeCredits,
  addCredits,
} from "@/lib/subscription";

type ErrorCode =
  | "UNAUTHORIZED"
  | "INSUFFICIENT_CREDITS"
  | "INVALID_INPUT"
  | "GENERATION_FAILED";

type GenerateResult =
  | {
      success: true;
      originalUrl: string;
      generatedUrl: string;
      remainingCredits: number;
    }
  | {
      success: false;
      error: ErrorCode;
      message: string;
    };

export async function generatePlushie(
  formData: FormData
): Promise<GenerateResult> {
  // 1. Auth check
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return {
      success: false,
      error: "UNAUTHORIZED",
      message: "You must be signed in to generate images.",
    };
  }

  const userId = session.user.id;

  // 2. Extract and validate inputs
  const imageFile = formData.get("image") as File | null;
  const styleId = formData.get("styleId") as string | null;
  const qualityId = formData.get("qualityId") as string | null;

  if (!imageFile || !styleId || !qualityId) {
    return {
      success: false,
      error: "INVALID_INPUT",
      message: "Image, style, and quality are required.",
    };
  }

  if (!APP_CONFIG.supportedFormats.includes(imageFile.type)) {
    return {
      success: false,
      error: "INVALID_INPUT",
      message: "Unsupported file format. Please upload a JPG, PNG, or WebP image.",
    };
  }

  if (imageFile.size > APP_CONFIG.maxFileSize) {
    return {
      success: false,
      error: "INVALID_INPUT",
      message: "File is too large. Maximum size is 10MB.",
    };
  }

  const style = PLUSHIE_STYLES.find((s) => s.id === styleId);
  if (!style) {
    return {
      success: false,
      error: "INVALID_INPUT",
      message: "Invalid style selected.",
    };
  }

  const qualityConfig = GENERATION_QUALITY_OPTIONS.find(
    (q) => q.id === qualityId
  );
  if (!qualityConfig) {
    return {
      success: false,
      error: "INVALID_INPUT",
      message: "Invalid quality selected.",
    };
  }

  // 3. Credit system
  const creditCost =
    CREDIT_COSTS.standardGeneration * qualityConfig.creditMultiplier;

  await ensureSubscription(userId);
  const consumed = await consumeCredits(userId, creditCost);

  if (!consumed) {
    return {
      success: false,
      error: "INSUFFICIENT_CREDITS",
      message: `Not enough credits. This generation costs ${creditCost} credit(s).`,
    };
  }

  // From here on, credits have been consumed — refund on any failure
  try {
    // 4. Upload original image to blob storage
    const imageBuffer = Buffer.from(await imageFile.arrayBuffer());
    const ext = imageFile.name.split(".").pop() || "png";
    const originalFilename = `${crypto.randomUUID()}.${ext}`;

    const originalResult = await upload(
      imageBuffer,
      originalFilename,
      "plushify/originals",
      { maxSize: APP_CONFIG.maxFileSize }
    );

    // 5. Call AI model
    const prompt = `Transform the subject(s) in this photo into an adorable ${style.name} style plush toy / stuffed animal. ` +
      `The plush toy should have soft, rounded features, visible stitching/seam details, and a fabric-like texture. ` +
      `Keep the overall likeness and distinguishing features recognizable, but make everything look soft, cuddly, and toy-like. ` +
      `The background should be a clean, simple studio setting.`;

    const result = await generateText({
      model: openrouter("google/gemini-2.5-flash-image"),
      providerOptions: {
        openrouter: {
          // Enable image output from Gemini
          modalities: ["image", "text"],
        },
      },
      messages: [
        {
          role: "user",
          content: [
            { type: "image", image: imageBuffer },
            { type: "text", text: prompt },
          ],
        },
      ],
      abortSignal: AbortSignal.timeout(APP_CONFIG.generationTimeout),
    });

    // 6. Extract generated image from result.files
    const generatedFile = result.files?.find((f) =>
      f.mediaType.startsWith("image/")
    );

    if (!generatedFile) {
      // Refund credits — no image was produced
      try {
        await addCredits(userId, creditCost);
      } catch (refundError) {
        console.error("CRITICAL: Failed to refund credits for user", userId, refundError);
      }
      return {
        success: false,
        error: "GENERATION_FAILED",
        message: "The AI did not produce an image. Please try again.",
      };
    }

    // 7. Upload generated image to blob storage
    const extMap: Record<string, string> = {
      "image/png": "png",
      "image/jpeg": "jpg",
      "image/webp": "webp",
      "image/gif": "gif",
    };
    const generatedExt = extMap[generatedFile.mediaType] ?? "png";
    const generatedFilename = `${crypto.randomUUID()}.${generatedExt}`;
    const generatedBuffer = Buffer.from(generatedFile.uint8Array);

    const generatedResult = await upload(
      generatedBuffer,
      generatedFilename,
      "plushify/generated",
      { maxSize: 20 * 1024 * 1024 } // generated images may be larger
    );

    // 8. Persist to database
    const generationId = crypto.randomUUID();

    await db.insert(generation).values({
      id: generationId,
      userId,
      originalUrl: originalResult.url,
      generatedUrl: generatedResult.url,
      style: style.name,
      quality: qualityConfig.id,
      creditsCost: creditCost,
    });

    return {
      success: true,
      originalUrl: originalResult.url,
      generatedUrl: generatedResult.url,
      remainingCredits: consumed.credits,
    };
  } catch (error) {
    console.error("[generate-plushie] Generation failed:", error);

    // Refund credits on any failure
    try {
      await addCredits(userId, creditCost);
    } catch (refundError) {
      console.error("CRITICAL: Failed to refund credits for user", userId, refundError);
    }

    const isTimeout =
      error instanceof Error && error.name === "TimeoutError";

    return {
      success: false,
      error: "GENERATION_FAILED",
      message: isTimeout
        ? "Generation timed out. Please try again."
        : "An error occurred during generation. Please try again.",
    };
  }
}
