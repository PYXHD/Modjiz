"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import { createClient } from "../supabase/browser";

type AuthContextType = {
  userId: string | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const supabase = useMemo(() => createClient(), []);

  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function run() {
      const {
        data: { user: finalUser },
      } = await supabase.auth.getUser();

      if (finalUser) {
        setUserId(finalUser.id);
      }

      setLoading(false);
    }

    run();
  }, [supabase]);

  if (loading) {
    return <div>Chargement des données...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        userId,
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
