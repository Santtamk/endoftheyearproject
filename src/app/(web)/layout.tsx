import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import Header from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { NextAuthProvider } from "@/components/AuthProvider/AuthProvider";
import Toast from "@/components/Toast/Toast";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const poppins = Poppins({ subset: ['latin'], weight: ["400"]})

//This is the Title
export const metadata: Metadata = {
  title: "LuxuryStay - Comprehensive Hotel Management Solution",
  description:
    "A modern hotel management application built with Next.js, designed to streamline operations, enhance guest experiences, and simplify day-to-day tasks for hotel staff and administrators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              {/* Header */}
              <Header />
              {children}
              {/* Footer */}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
