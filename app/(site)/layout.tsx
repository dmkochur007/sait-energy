import { Toaster } from "@/components/ui/sonner"
import { CartProvider } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <SiteFooter />
      <Toaster position="bottom-right" richColors />
    </CartProvider>
  )
}
