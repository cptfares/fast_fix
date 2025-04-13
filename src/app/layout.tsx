import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FastFix | Professional Glass & Door Repair Services in DMV",
    template: "%s | FastFix",
  },
  description: "FastFix provides professional glass and door repair services throughout the DMV area. Emergency services available 24/7. Licensed and insured technicians.",
  keywords: ["glass repair", "door repair", "DMV area", "emergency glass repair", "commercial glass repair", "residential glass repair"],
  authors: [{ name: "FastFix" }],
  creator: "FastFix",
  publisher: "FastFix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fastfix.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fastfix.com",
    siteName: "FastFix",
    title: "FastFix | Professional Glass & Door Repair Services in DMV",
    description: "Professional glass and door repair services throughout the DMV area. Emergency services available 24/7.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FastFix - Professional Glass & Door Repair Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FastFix | Professional Glass & Door Repair Services in DMV",
    description: "Professional glass and door repair services throughout the DMV area. Emergency services available 24/7.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <body className={inter.className}>
        <Header />
        <main className="pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
