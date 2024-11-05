// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonNav from "@/components/ButtonNav";
import ThemeProvider from "@/context/ThemeContext";
import { ClerkProvider } from "@clerk/nextjs";

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
      <ClerkProvider>
        <ThemeProvider>
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <div className="flex flex-col dark:text-white bg-white dark:bg-[#0D0F11] font-inter">
              <Header />
              <div className="flex flex-row gap-4 mt-4">
                <Navbar />
                {children}
              </div>
              <ButtonNav />
              <Footer />
            </div>
          </body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}
