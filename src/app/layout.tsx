import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/contexts/providers";

export const metadata: Metadata = {
  title: "Z"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
