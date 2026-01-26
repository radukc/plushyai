import Link from "next/link";
import { Code, Rocket, Bell, ArrowRight } from "lucide-react";
import {
  DocContent,
  DocHeader,
  DocSection,
  DocTip,
} from "@/components/docs/doc-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Reference - Plushify Docs",
  description:
    "Plushify API documentation. Integrate plushie generation into your applications with our RESTful API.",
};

export default function APIReferencePage() {
  return (
    <DocContent>
      <DocHeader
        title="API Reference"
        description="Integrate Plushify's powerful plushie generation into your own applications."
      />

      {/* Coming Soon Banner */}
      <div className="mb-12 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <Rocket className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-2">API Coming Soon</h2>
        <p className="text-muted-foreground max-w-lg mx-auto mb-6">
          We&apos;re working hard to bring you a powerful API for integrating
          Plushify into your applications. Sign up to be notified when it
          launches!
        </p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1"
          />
          <Button type="button">
            <Bell className="h-4 w-4 mr-2" />
            Notify Me
          </Button>
        </form>
      </div>

      <DocSection title="Planned Features" id="planned-features">
        <p className="text-muted-foreground mb-6">
          Our upcoming API will include these powerful features:
        </p>

        <div className="grid gap-4 sm:grid-cols-2 mb-6">
          <div className="border rounded-lg p-4">
            <Code className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-medium mb-1">RESTful API</h4>
            <p className="text-sm text-muted-foreground">
              Simple, intuitive REST endpoints for all generation features.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <Code className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-medium mb-1">Webhook Support</h4>
            <p className="text-sm text-muted-foreground">
              Receive notifications when generations complete.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <Code className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-medium mb-1">Batch Processing</h4>
            <p className="text-sm text-muted-foreground">
              Generate multiple plushies in a single API call.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <Code className="h-5 w-5 text-primary mb-2" />
            <h4 className="font-medium mb-1">SDKs & Libraries</h4>
            <p className="text-sm text-muted-foreground">
              Official SDKs for Python, JavaScript, and more.
            </p>
          </div>
        </div>
      </DocSection>

      <DocSection title="API Preview" id="preview">
        <p className="text-muted-foreground mb-6">
          Here&apos;s a preview of what the API will look like:
        </p>

        <div className="bg-muted/50 rounded-lg p-4 mb-6 overflow-x-auto">
          <pre className="text-sm">
            <code>{`// Generate a plushie
POST /api/v1/generate

{
  "image_url": "https://example.com/photo.jpg",
  "style": "kawaii",
  "quality": "high",
  "size": 1024,
  "remove_background": true
}

// Response
{
  "id": "gen_abc123",
  "status": "processing",
  "estimated_time": 15,
  "webhook_url": "https://api.plushify.com/webhooks/gen_abc123"
}`}</code>
          </pre>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`// Check generation status
GET /api/v1/generate/gen_abc123

// Response (completed)
{
  "id": "gen_abc123",
  "status": "completed",
  "result_url": "https://cdn.plushify.com/results/gen_abc123.png",
  "credits_used": 1,
  "metadata": {
    "style": "kawaii",
    "quality": "high",
    "size": 1024,
    "processing_time": 12.5
  }
}`}</code>
          </pre>
        </div>
      </DocSection>

      <DocSection title="API Access" id="access">
        <p className="text-muted-foreground mb-6">
          API access will be available exclusively for Elite plan subscribers.
          Benefits include:
        </p>

        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
          <li>Unlimited API calls (within your credit balance)</li>
          <li>Priority processing queue</li>
          <li>Dedicated support channel</li>
          <li>Custom webhook integrations</li>
          <li>Usage analytics dashboard</li>
        </ul>

        <DocTip variant="info">
          Don&apos;t have an Elite plan yet? Upgrade to get API access as soon
          as it launches, plus all other Elite benefits.
        </DocTip>

        <div className="flex gap-4 mt-6">
          <Button asChild>
            <Link href="/pricing">
              View Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DocSection>

      <DocSection title="Rate Limits" id="rate-limits">
        <p className="text-muted-foreground mb-6">
          To ensure fair usage and system stability, the API will have the
          following rate limits:
        </p>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-3 font-medium">Endpoint</th>
                <th className="text-left p-3 font-medium">Limit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 text-muted-foreground">POST /generate</td>
                <td className="p-3 text-muted-foreground">60 requests/minute</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 text-muted-foreground">GET /generate/:id</td>
                <td className="p-3 text-muted-foreground">
                  120 requests/minute
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3 text-muted-foreground">GET /gallery</td>
                <td className="p-3 text-muted-foreground">
                  120 requests/minute
                </td>
              </tr>
              <tr className="border-t">
                <td className="p-3 text-muted-foreground">POST /batch</td>
                <td className="p-3 text-muted-foreground">10 requests/minute</td>
              </tr>
            </tbody>
          </table>
        </div>

        <DocTip variant="tip">
          Need higher rate limits? Contact us about our Enterprise plan for
          custom limits and dedicated infrastructure.
        </DocTip>
      </DocSection>

      <DocSection title="Authentication" id="authentication">
        <p className="text-muted-foreground mb-6">
          All API requests will require authentication using an API key. Here&apos;s
          how it will work:
        </p>

        <div className="bg-muted/50 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm">
            <code>{`// Include your API key in the Authorization header
curl -X POST https://api.plushify.com/v1/generate \\
  -H "Authorization: Bearer pk_live_your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"image_url": "...", "style": "kawaii"}'`}</code>
          </pre>
        </div>

        <p className="text-muted-foreground mt-6">
          API keys will be manageable from your account dashboard, where you can
          create, rotate, and revoke keys as needed.
        </p>
      </DocSection>

      {/* Final CTA */}
      <div className="mt-12 p-6 rounded-xl border bg-muted/30">
        <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
        <p className="text-muted-foreground mb-4">
          Be the first to know when our API launches. We&apos;ll send you
          documentation and early access instructions.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md">
          <Input type="email" placeholder="your@email.com" className="flex-1" />
          <Button type="button" variant="outline">
            Subscribe
          </Button>
        </form>
      </div>
    </DocContent>
  );
}
