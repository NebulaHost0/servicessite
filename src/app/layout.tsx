import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NebulaHost - IT Services & Consulting",
  description: "Professional IT services and consulting for businesses. We provide cloud solutions, cybersecurity, digital transformation, and technical consulting to help your business thrive in the digital age.",
  keywords: "IT services, consulting, cloud solutions, cybersecurity, digital transformation, technical support, business technology",
  openGraph: {
    title: "NebulaHost - IT Services & Consulting",
    description: "Professional IT services and consulting for businesses",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
