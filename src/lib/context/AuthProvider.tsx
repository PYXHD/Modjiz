"use client";

import type { User } from "@supabase/supabase-js";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createClient } from "../supabase/browser";

import LoadingScreen from "@/components/ui/loadingScreen/LoadingScreen";

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = useMemo(() => createClient(), []);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      const {
        data: { user: finalUser },
      } = await supabase.auth.getUser();

      setUser(finalUser);

      setLoading(false);
    }

    run();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  if (loading) {
    return <LoadingScreen message="Chargement des données..." />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
