import Link from "next/link";
import type { Metadata } from "next";
import {
  Upload,
  Palette,
  Settings,
  Download,
  Images,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";

import {
  DocContent,
  DocHeader,
  DocSection,
  DocTip,
} from "@/components/docs/doc-content";

export const metadata: Metadata = {
  title: "How to Use - Plushify Docs",
  description:
    "Comprehensive guide on using Plushify to transform your photos into adorable plushies. Learn about uploading, styles, settings, and more.",
};

export default function HowToUsePage() {
  return (
    <DocContent>
      <DocHeader
        title="How to Use Plushify"
        description="Everything you need to know about creating amazing plushie transformations."
      />

      <DocSection title="Uploading Images" id="uploading">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
            <Upload className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              The first step in creating a plushie is uploading your source
              image. Plushify supports various image formats and provides an
              intuitive upload experience.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Supported Formats</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>
            <strong>JPG/JPEG</strong> - Standard photo format, widely supported
          </li>
          <li>
            <strong>PNG</strong> - Supports transparency, great for clean images
          </li>
          <li>
            <strong>WebP</strong> - Modern format with excellent compression
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-3">File Requirements</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>Maximum file size: 10MB</li>
          <li>Minimum resolution: 256x256 pixels</li>
          <li>Recommended resolution: 512x512 pixels or higher</li>
        </ul>

        <h3 className="text-lg font-medium mb-3">How to Upload</h3>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-6">
          <li>Navigate to the Dashboard</li>
          <li>Locate the upload area on the left panel</li>
          <li>
            Either drag and drop your image onto the upload zone, or click to
            browse your files
          </li>
          <li>Wait for the upload to complete - a preview will appear</li>
        </ol>

        <DocTip variant="tip">
          You can remove an uploaded image by clicking the X button on the
          preview, then upload a different one.
        </DocTip>
      </DocSection>

      <DocSection title="Choosing a Style" id="styles">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
            <Palette className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              Plushify offers five distinct plushie styles, each providing a
              unique artistic interpretation of your photo. Choose the style
              that best matches your vision.
            </p>
          </div>
        </div>

        <div className="grid gap-4 mb-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-1">Classic Plushie</h4>
            <p className="text-sm text-muted-foreground">
              The traditional stuffed animal look with soft, rounded features
              and friendly expressions. Perfect for a timeless, nostalgic feel.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-1">Kawaii</h4>
            <p className="text-sm text-muted-foreground">
              Japanese-inspired cute style with big eyes, rosy cheeks, and
              adorable proportions. Ideal for creating ultra-cute versions of
              your photos.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-1">Realistic Plush</h4>
            <p className="text-sm text-muted-foreground">
              A more lifelike plushie style that maintains recognizable features
              while adding plush textures. Great for preserving likeness.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-1">Cartoon</h4>
            <p className="text-sm text-muted-foreground">
              Bold, playful cartoon style with exaggerated features and vibrant
              colors. Perfect for fun, energetic transformations.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-1">Chibi</h4>
            <p className="text-sm text-muted-foreground">
              Miniaturized, super-deformed style with large heads and small
              bodies. Creates adorable, compact versions of your subjects.
            </p>
          </div>
        </div>

        <DocTip variant="info">
          Basic plan users have access to 3 styles (Classic, Kawaii, Cartoon).
          Pro and Elite plans unlock all 5 styles including Realistic Plush and
          Chibi.
        </DocTip>
      </DocSection>

      <DocSection title="Adjusting Settings" id="settings">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
            <Settings className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              Fine-tune your plushie generation with various settings to control
              quality, size, and additional features.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Quality Levels</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">Standard</span>
            <span>Fast processing, good for previews and social media</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">High</span>
            <span>Balanced quality and speed, recommended for most uses</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">Ultra</span>
            <span>Maximum detail, ideal for prints and merchandise</span>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Output Sizes</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">512px</span>
            <span>Basic plan - Great for web and social media</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">1024px</span>
            <span>Pro plan - High-resolution for prints up to 8x8 inches</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">2048px</span>
            <span>Elite plan - Ultra HD for large prints and merchandise</span>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Additional Options</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>
            <strong>Background Removal</strong> (Pro/Elite) - Generates your
            plushie with a transparent background, perfect for overlays and
            compositions
          </li>
        </ul>

        <DocTip variant="warning">
          Higher quality settings and larger output sizes may use more credits.
          Check the credit cost displayed before generating.
        </DocTip>
      </DocSection>

      <DocSection title="Downloading Results" id="downloading">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
            <Download className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              Once your plushie is generated, you have several options for
              saving and sharing your creation.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Download Options</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>
            <strong>Download</strong> - Save the generated image at your
            selected resolution
          </li>
          <li>
            <strong>Download HD</strong> - Get a higher resolution version
            (additional credits may apply)
          </li>
          <li>
            <strong>Save to Gallery</strong> - Store the image in your personal
            gallery for easy access later
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-3">File Format</h3>
        <p className="text-muted-foreground mb-6">
          All downloads are provided in PNG format for maximum quality and
          transparency support. If you enabled background removal, the PNG will
          have a transparent background.
        </p>

        <DocTip variant="tip">
          Save your favorite creations to your gallery! This makes it easy to
          download them again later or compare different versions.
        </DocTip>
      </DocSection>

      <DocSection title="Managing Your Gallery" id="gallery">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
            <Images className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              Your gallery stores all your plushie creations in one convenient
              place. Access it anytime to view, download, or manage your images.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Gallery Features</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>View all your generated plushies in a beautiful grid layout</li>
          <li>Click any image to see a side-by-side comparison with the original</li>
          <li>Download original or plushified versions at any time</li>
          <li>Delete images you no longer need</li>
          <li>See metadata including creation date and style used</li>
        </ul>

        <h3 className="text-lg font-medium mb-3">Storage Limits</h3>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">Basic</span>
            <span>7 days of generation history</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">Pro</span>
            <span>30 days of generation history</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span className="font-medium text-foreground w-24">Elite</span>
            <span>Unlimited generation history</span>
          </div>
        </div>

        <p className="text-muted-foreground">
          <Link href="/gallery" className="text-primary hover:underline">
            Visit your gallery
          </Link>{" "}
          to see all your creations.
        </p>
      </DocSection>

      <DocSection title="Tips & Best Practices" id="tips">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
            <Lightbulb className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              Get the most out of Plushify with these tips from our team and
              community.
            </p>
          </div>
        </div>

        <h3 className="text-lg font-medium mb-3">Photo Selection Tips</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>Use photos with clear, well-lit faces for best results</li>
          <li>Front-facing portraits tend to produce the best transformations</li>
          <li>Avoid heavily filtered or low-resolution images</li>
          <li>Simple backgrounds work better than busy ones</li>
          <li>Close-up shots often yield more detailed plushies</li>
        </ul>

        <h3 className="text-lg font-medium mb-3">Style Recommendations</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>
            <strong>Pet photos:</strong> Try Kawaii or Chibi for maximum cuteness
          </li>
          <li>
            <strong>Family portraits:</strong> Classic Plushie maintains
            recognizable features
          </li>
          <li>
            <strong>Character creation:</strong> Cartoon style for bold,
            expressive results
          </li>
          <li>
            <strong>Gift items:</strong> Realistic Plush for a sophisticated look
          </li>
        </ul>

        <h3 className="text-lg font-medium mb-3">Credit-Saving Tips</h3>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
          <li>
            Start with Standard quality to preview before generating in High or
            Ultra
          </li>
          <li>
            Try different styles at lower resolution first to find your favorite
          </li>
          <li>Save to gallery instead of re-generating the same image</li>
        </ul>
      </DocSection>

      <DocSection title="Troubleshooting" id="troubleshooting">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-shrink-0 p-2 rounded-lg bg-orange-500/10">
            <AlertTriangle className="h-5 w-5 text-orange-500" />
          </div>
          <div>
            <p className="text-muted-foreground mb-4">
              Having issues? Here are solutions to common problems.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Image won&apos;t upload</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Check that the file is under 10MB</li>
              <li>Ensure the format is JPG, PNG, or WebP</li>
              <li>Try a different browser or clear your cache</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Generation is taking too long</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Higher quality settings take longer to process</li>
              <li>Server load may vary - try again in a few minutes</li>
              <li>Pro/Elite users get priority processing</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Results don&apos;t look right</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Try a different source photo with better lighting</li>
              <li>Experiment with different plushie styles</li>
              <li>Ensure the face is clearly visible in the photo</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Can&apos;t download my image</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Check your internet connection</li>
              <li>Try right-clicking and &quot;Save Image As&quot;</li>
              <li>Clear browser cache and try again</li>
            </ul>
          </div>
        </div>

        <p className="text-muted-foreground mt-6">
          Still having issues? Check our{" "}
          <Link href="/docs/faq" className="text-primary hover:underline">
            FAQ page
          </Link>{" "}
          or contact support for help.
        </p>
      </DocSection>
    </DocContent>
  );
}
