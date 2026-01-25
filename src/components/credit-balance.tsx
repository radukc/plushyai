"use client";

import Link from "next/link";
import { Coins, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useMockAuth } from "@/lib/mock-auth";
import { cn } from "@/lib/utils";

interface CreditBalanceProps {
  variant?: "compact" | "full";
  className?: string;
}

export function CreditBalance({
  variant = "compact",
  className,
}: CreditBalanceProps) {
  const { user, isAuthenticated } = useMockAuth();

  if (!isAuthenticated || !user) {
    return null;
  }

  const isLow = user.credits < 10;
  const planLabel = user.plan.charAt(0).toUpperCase() + user.plan.slice(1);

  if (variant === "compact") {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/pricing"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                "bg-primary/10 hover:bg-primary/20 text-primary",
                isLow && "bg-orange-500/10 text-orange-600 hover:bg-orange-500/20",
                className
              )}
            >
              <Coins className="h-4 w-4" />
              <span>{user.credits}</span>
              {isLow && <Plus className="h-3 w-3" />}
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-medium">{user.credits} credits remaining</p>
            <p className="text-xs text-muted-foreground">{planLabel} Plan</p>
            {isLow && (
              <p className="text-xs text-orange-600 mt-1">
                Running low! Click to buy more
              </p>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  // Full variant for dashboard
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-4 rounded-lg border bg-card",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full",
              isLow ? "bg-orange-500/10" : "bg-primary/10"
            )}
          >
            <Coins
              className={cn(
                "h-5 w-5",
                isLow ? "text-orange-600" : "text-primary"
              )}
            />
          </div>
          <div>
            <p className="text-2xl font-bold">{user.credits}</p>
            <p className="text-xs text-muted-foreground">Credits Available</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{planLabel} Plan</p>
        </div>
      </div>
      {isLow && (
        <Button asChild size="sm" className="w-full mt-2">
          <Link href="/pricing">
            <Plus className="h-4 w-4 mr-2" />
            Buy More Credits
          </Link>
        </Button>
      )}
    </div>
  );
}
