import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdelrahman Mahmoud | AI & Machine Learning Engineer",
  description:
    "AI-focused Computer Science and Engineering student specializing in Machine Learning, Computer Vision, and intelligent system development. Passionate about transforming data into scalable, real-world AI solutions.",
  keywords: ["AI Engineer", "Machine Learning", "Computer Vision", "Deep Learning", "Python", "YOLOv8", "Abdelrahman Mahmoud"],
  authors: [{ name: "Abdelrahman Mahmoud", url: "https://abdelrahman-mahmoud-ai.vercel.app" }],
  creator: "Abdelrahman Mahmoud",
  metadataBase: new URL("https://abdelrahman-mahmoud-ai.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdelrahman-mahmoud-ai.vercel.app",
    title: "Abdelrahman Mahmoud | AI & Machine Learning Engineer",
    description: "AI/ML & Computer Vision engineer specializing in intelligent system development.",
    siteName: "Abdelrahman Mahmoud Portfolio",
    images: [{ url: "/images/profile.jpg", width: 1200, height: 630, alt: "Abdelrahman Mahmoud" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Mahmoud | AI & ML Engineer",
    description: "AI/ML & Computer Vision engineer.",
    images: ["/images/profile.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = {
  themeColor: "#050c18",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen bg-bg-base">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
