import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Users, Zap, Target, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Plushify",
  description:
    "Learn about Plushify's mission to bring joy through AI-powered plushie transformations. Meet our team and discover our story.",
};

const values = [
  {
    icon: Heart,
    title: "Joy & Creativity",
    description:
      "We believe everyone deserves a little more joy in their lives. Our AI transforms ordinary photos into extraordinary plushie art.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your photos are precious memories. We never use your images to train AI and delete them according to our strict privacy policy.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We're constantly pushing the boundaries of AI technology to deliver faster, better, and more adorable results.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Over 10,000 happy users have created plushie versions of themselves, their loved ones, and their pets.",
  },
];

const stats = [
  { value: "10,000+", label: "Happy Users" },
  { value: "50,000+", label: "Plushies Created" },
  { value: "5", label: "Unique Styles" },
  { value: "99.9%", label: "Uptime" },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-founder",
    image: "https://i.pravatar.cc/200?u=sarah",
    bio: "Former AI researcher at Stanford with a passion for bringing smiles to people's faces.",
  },
  {
    name: "Marcus Johnson",
    role: "CTO & Co-founder",
    image: "https://i.pravatar.cc/200?u=marcus",
    bio: "10+ years in machine learning, previously led AI teams at major tech companies.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://i.pravatar.cc/200?u=emily",
    bio: "Award-winning designer focused on creating delightful user experiences.",
  },
  {
    name: "David Kim",
    role: "Lead Engineer",
    image: "https://i.pravatar.cc/200?u=david",
    bio: "Full-stack wizard who ensures Plushify runs smoothly for everyone.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Making the World a Little More{" "}
              <span className="text-gradient">Adorable</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Plushify was born from a simple idea: what if we could turn
              anyone&apos;s photo into a cuddly plushie? Today, we&apos;re on a
              mission to spread joy, one plushie transformation at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transforming Memories Into Timeless Keepsakes
              </h2>
              <p className="text-muted-foreground mb-6">
                We started Plushify because we believe that our most cherished
                photos deserve to be celebrated in unique ways. Whether it&apos;s a
                beloved pet, a family portrait, or a selfie with friends, we
                turn those moments into adorable plushie art.
              </p>
              <p className="text-muted-foreground mb-8">
                Our AI technology is designed to capture the essence of your
                photos while adding that irresistible plushie charm. Every
                transformation is unique, just like the memories they represent.
              </p>
              <Button asChild>
                <Link href="/dashboard">Try Plushify Free</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium">AI-Powered Magic</p>
                  <p className="text-sm text-muted-foreground">
                    Transforming photos since 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Plushify.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Plushify who work every day to bring
              more cuteness into the world.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Create Your First Plushie?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy users who have transformed their favorite
            photos into adorable plushie art.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/register">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
