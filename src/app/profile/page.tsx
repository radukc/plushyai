"use client";

import { redirect } from "next/navigation";
import Link from "next/link";
import {
  User,
  Mail,
  Calendar,
  CreditCard,
  Image,
  Settings,
  Shield,
  Bell,
  ChevronRight,
} from "lucide-react";

import { useSession } from "@/lib/auth-client";
import { useMockAuth } from "@/lib/mock-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();
  const { user: mockUser } = useMockAuth();

  // Show loading state
  if (isPending) {
    return (
      <main id="main-content" className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-muted rounded w-1/4" />
            <div className="h-64 bg-muted rounded" />
          </div>
        </div>
      </main>
    );
  }

  // Use real session if available, otherwise use mock user for demo
  const user = session?.user || mockUser;

  if (!user) {
    redirect("/login");
  }

  const profileSections = [
    {
      title: "Account Settings",
      description: "Manage your account preferences",
      icon: Settings,
      href: "#",
      items: [
        { label: "Edit Profile", description: "Update your name and photo" },
        { label: "Change Password", description: "Update your password" },
        { label: "Email Preferences", description: "Manage email notifications" },
      ],
    },
    {
      title: "Billing & Credits",
      description: "Manage your subscription and credits",
      icon: CreditCard,
      href: "/pricing",
      items: [
        { label: "Current Plan", value: mockUser?.plan ? mockUser.plan.charAt(0).toUpperCase() + mockUser.plan.slice(1) : "Free" },
        { label: "Credits Available", value: `${mockUser?.credits || 0} credits` },
        { label: "Purchase History", description: "View past transactions" },
      ],
    },
    {
      title: "Privacy & Security",
      description: "Control your privacy settings",
      icon: Shield,
      href: "#",
      items: [
        { label: "Two-Factor Authentication", description: "Add extra security" },
        { label: "Active Sessions", description: "Manage logged in devices" },
        { label: "Data & Privacy", description: "Download or delete your data" },
      ],
    },
    {
      title: "Notifications",
      description: "Choose what updates you receive",
      icon: Bell,
      href: "#",
      items: [
        { label: "Email Notifications", description: "Generation complete, tips" },
        { label: "Marketing Emails", description: "News and special offers" },
      ],
    },
  ];

  return (
    <main id="main-content" className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Profile Overview Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
                <AvatarImage
                  src={user.image || ""}
                  alt={user.name || "User"}
                  referrerPolicy="no-referrer"
                />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white">
                  {(user.name?.[0] || user.email?.[0] || "U").toUpperCase()}
                </AvatarFallback>
              </Avatar>

              {/* User Info */}
              <div className="flex-1 text-center sm:text-left space-y-3">
                <div>
                  <h2 className="text-2xl font-semibold">{user.name || "Plushify User"}</h2>
                  <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-2 mt-1">
                    <Mail className="h-4 w-4" />
                    {user.email}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                  <Badge variant="secondary" className="gap-1">
                    <CreditCard className="h-3 w-3" />
                    {mockUser?.plan ? mockUser.plan.charAt(0).toUpperCase() + mockUser.plan.slice(1) : "Free"} Plan
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Image className="h-3 w-3" />
                    {mockUser?.credits || 0} Credits
                  </Badge>
                  <Badge variant="outline" className="gap-1">
                    <Calendar className="h-3 w-3" />
                    Member since 2024
                  </Badge>
                </div>
              </div>

              {/* Edit Button */}
              <Button variant="outline" size="sm" className="shrink-0">
                <User className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{mockUser?.credits || 0}</div>
                <p className="text-sm text-muted-foreground mt-1">Credits Available</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold">24</div>
                <p className="text-sm text-muted-foreground mt-1">Plushies Created</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <p className="text-sm text-muted-foreground mt-1">In Gallery</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold">3</div>
                <p className="text-sm text-muted-foreground mt-1">Downloads</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Sections */}
        <div className="grid gap-6">
          {profileSections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {section.items.map((item, index) => (
                    <div key={item.label}>
                      {index > 0 && <Separator className="my-2" />}
                      <button className="w-full flex items-center justify-between py-2 px-1 rounded hover:bg-muted/50 transition-colors text-left">
                        <div>
                          <p className="font-medium text-sm">{item.label}</p>
                          {item.description && (
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          )}
                          {"value" in item && (
                            <p className="text-sm text-primary font-medium">{item.value}</p>
                          )}
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
          <Button variant="outline" asChild>
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/pricing">Upgrade Plan</Link>
            </Button>
            <Button asChild>
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
