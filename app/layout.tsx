import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Minimalist personal website",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#ECECEC] font-mono text-black min-h-screen">{children}</body>
    </html>
  )
}
