"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { mockUser, type User } from "./mock-data";

interface MockAuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
  updateCredits: (newCredits: number) => void;
}

const MockAuthContext = createContext<MockAuthContextType | undefined>(undefined);

interface MockAuthProviderProps {
  children: ReactNode;
  defaultAuthenticated?: boolean;
}

export function MockAuthProvider({
  children,
  defaultAuthenticated = true,
}: MockAuthProviderProps) {
  const [user, setUser] = useState<User | null>(
    defaultAuthenticated ? mockUser : null
  );
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(() => {
    setIsLoading(true);
    // Simulate async login
    setTimeout(() => {
      setUser(mockUser);
      setIsLoading(false);
    }, 500);
  }, []);

  const logout = useCallback(() => {
    setIsLoading(true);
    // Simulate async logout
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 300);
  }, []);

  const updateCredits = useCallback((newCredits: number) => {
    setUser((currentUser) => {
      if (!currentUser) return null;
      return {
        ...currentUser,
        credits: Math.max(0, newCredits),
      };
    });
  }, []);

  const value: MockAuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateCredits,
  };

  return (
    <MockAuthContext.Provider value={value}>
      {children}
    </MockAuthContext.Provider>
  );
}

export function useMockAuth(): MockAuthContextType {
  const context = useContext(MockAuthContext);
  if (context === undefined) {
    throw new Error("useMockAuth must be used within a MockAuthProvider");
  }
  return context;
}

// Hook for consuming credits during generation
export function useCredits() {
  const { user, updateCredits } = useMockAuth();

  const consumeCredits = useCallback(
    (amount: number = 1) => {
      if (!user) return false;
      if (user.credits < amount) return false;
      updateCredits(user.credits - amount);
      return true;
    },
    [user, updateCredits]
  );

  const hasEnoughCredits = useCallback(
    (amount: number = 1) => {
      return (user?.credits ?? 0) >= amount;
    },
    [user]
  );

  return {
    credits: user?.credits ?? 0,
    consumeCredits,
    hasEnoughCredits,
    addCredits: (amount: number) => updateCredits((user?.credits ?? 0) + amount),
  };
}
