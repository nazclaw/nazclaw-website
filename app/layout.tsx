import type React from "react"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistMono.className}>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
