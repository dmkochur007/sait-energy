import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "EnergyStore - Зарядні станції та енергетичне обладнання",
  description:
    "Онлайн-магазин портативних зарядних станцій, сонячних панелей та акумуляторів від провідних брендів: EcoFlow, Bluetti, Jackery, Anker, Goal Zero.",
  keywords:
    "зарядна станція, портативна електростанція, сонячна панель, EcoFlow, Bluetti, Jackery, Anker, купити",
}

export const viewport: Viewport = {
  themeColor: "#2563eb",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
