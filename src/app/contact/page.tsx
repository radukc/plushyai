"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  Twitter,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Our team typically responds within 24 hours.",
    contact: "support@plushify.com",
    href: "mailto:support@plushify.com",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Available Monday to Friday, 9am-6pm EST.",
    contact: "Start a conversation",
    href: "#",
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We aim to respond to all inquiries quickly.",
    contact: "< 24 hours",
    href: null,
  },
];

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking 'Forgot Password' on the login page and following the instructions sent to your email.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes! We offer a 30-day money-back guarantee. Contact us with your order details and we'll process your refund.",
  },
  {
    question: "How do I upgrade my plan?",
    answer:
      "Visit the Pricing page and select your new plan. Your credits will be updated immediately upon upgrade.",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question or need help? We&apos;re here for you. Reach out
              and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => (
              <Card key={method.title}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10">
                      <method.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-sm text-primary hover:underline"
                        >
                          {method.contact}
                        </a>
                      ) : (
                        <span className="text-sm font-medium">
                          {method.contact}
                        </span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>

              {isSubmitted ? (
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                        <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We&apos;ll get back to you
                        within 24 hours.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select disabled={isSubmitting}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">
                          Billing Question
                        </SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">...</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* FAQ & Info */}
            <div>
              <h2 className="text-2xl font-bold mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-8">
                Quick answers to common questions.
              </p>

              <div className="space-y-4 mb-12">
                {faqs.map((faq) => (
                  <Card key={faq.question}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{faq.answer}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="p-6 rounded-xl bg-muted/50 border">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://twitter.com/plushify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background border hover:border-primary transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/plushify"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-background border hover:border-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:support@plushify.com"
                    className="p-3 rounded-lg bg-background border hover:border-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Plushify Inc.</p>
                      <p className="text-sm text-muted-foreground">
                        123 AI Street, Suite 456
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-4">
            Looking for documentation or guides?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/docs">Browse Documentation</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/faq">View Full FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
