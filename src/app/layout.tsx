import { Navbar } from "@/components";
import type { Metadata, Viewport } from "next";
import { Almarai } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "دورة التسويق الفعال للمشروعات الصغيرة",
  description: "دورة التسويق الفعال للمشروعات الصغيرة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <body className={almarai.className}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
