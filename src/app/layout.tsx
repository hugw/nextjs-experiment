import { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "App Title",
  description: "App Description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
