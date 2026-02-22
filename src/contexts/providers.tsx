"use client";

import { Toaster } from "sonner";
import { AuthProvider } from "./auth-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <Toaster richColors />
      {children}
    </AuthProvider>
  );
}
