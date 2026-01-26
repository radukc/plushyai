import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Plushify",
  description:
    "Tips, tutorials, and updates from the Plushify team. Learn how to create amazing plushie transformations and stay up to date with new features.",
};

const featuredPost = {
  id: "1",
  title: "Introducing Plushify 2.0: More Styles, Better Quality",
  excerpt:
    "We're excited to announce the biggest update to Plushify yet. With two new styles, improved AI models, and faster processing, creating plushies has never been better.",
  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
  category: "Product Updates",
  author: {
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/100?u=sarah",
  },
  date: "January 20, 2026",
  readTime: "5 min read",
};

const posts = [
  {
    id: "2",
    title: "5 Tips for the Perfect Plushie Photo",
    excerpt:
      "Getting great results starts with a great photo. Here are our top tips for taking photos that transform beautifully into plushies.",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop",
    category: "Tips & Tricks",
    date: "January 15, 2026",
    readTime: "4 min read",
  },
  {
    id: "3",
    title: "Behind the Scenes: How Our AI Creates Plushies",
    excerpt:
      "Ever wondered how Plushify transforms your photos? Take a peek behind the curtain at the technology powering our plushie magic.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
    category: "Technology",
    date: "January 10, 2026",
    readTime: "7 min read",
  },
  {
    id: "4",
    title: "Customer Spotlight: How Pet Owners Use Plushify",
    excerpt:
      "Meet some of our amazing users who have turned their beloved pets into adorable plushie keepsakes. Their stories will melt your heart!",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop",
    category: "Community",
    date: "January 5, 2026",
    readTime: "6 min read",
  },
  {
    id: "5",
    title: "New Year, New Plushies: 2026 Roadmap Preview",
    excerpt:
      "Exciting things are coming to Plushify this year! Get a sneak peek at the features and improvements we're working on.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    category: "Product Updates",
    date: "January 1, 2026",
    readTime: "5 min read",
  },
  {
    id: "6",
    title: "The Complete Guide to Plushify Styles",
    excerpt:
      "Not sure which style to choose? This comprehensive guide breaks down each of our five plushie styles to help you pick the perfect one.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "Tips & Tricks",
    date: "December 28, 2025",
    readTime: "8 min read",
  },
];

const categories = [
  "All Posts",
  "Product Updates",
  "Tips & Tricks",
  "Technology",
  "Community",
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Plushify <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tips, tutorials, product updates, and stories from our community.
              Learn how to create the perfect plushie transformations.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-video md:aspect-auto">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {featuredPost.author.name}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <Button className="w-fit">
                  Read Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden group">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      <Tag className="h-3 w-3 mr-1" />
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest tips, tutorials, and
              product updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime.{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
