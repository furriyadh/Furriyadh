import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import I18nProviderWrapper from "@/components/I18nProviderWrapper"; // Import the wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Note: Metadata cannot be dynamic based on language here easily in the root layout.
// Consider using generateMetadata in specific page components for dynamic titles/descriptions.
export const metadata: Metadata = {
  title: "Shown.io - AI-Powered Ad Optimization", // Generic title
  description: "Let AI run your ads & attract more customers effortlessly.", // Generic description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The lang and dir attributes will be set dynamically by DirectionalitySetter in I18nProviderWrapper
    <html>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProviderWrapper>
          {children}
        </I18nProviderWrapper>
      </body>
    </html>
  );
}

