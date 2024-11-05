// layout.tsx
// "use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import ButtonNav from "@/components/ButtonNav";
import ThemeProvider from "@/context/ThemeContext";
// import MainProvider from "@/components/Main";
import Providers from "./Providers";
// import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Diamond Fleet Rentals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Wrap entire layout in ClerkProvider */}
      {/* <ClerkProvider> */}
        <ThemeProvider>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Providers>
              {children}
            </Providers>
          </body>
        </ThemeProvider>
      {/* </ClerkProvider> */}
    </html>
  );
}
