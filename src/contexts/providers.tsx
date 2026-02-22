"use client";

import { Toaster } from "sonner";
import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
        <UserProvider>
            <Toaster richColors />
            {children}
        </UserProvider>
    </AuthProvider>
  );
}
