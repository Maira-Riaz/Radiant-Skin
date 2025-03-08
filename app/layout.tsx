
import type React from "react"
import "./globals.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Glow Skincare - Radiant Skin Awaits",
  description: "Discover the secret to naturally glowing skin with Glow Skincare products.",
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
