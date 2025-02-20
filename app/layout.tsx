import type React from "react"
import "./globals.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gliss - Radiant Skin Awaits",
  description: "Discover the secret to naturally glowing skin with Gliss skincare products.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

