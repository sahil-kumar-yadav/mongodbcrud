import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import NavBar from "@/components/layout/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mogodb CRUD Pro",
  description: "Robust CRUD app with Next.js 15 + MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
