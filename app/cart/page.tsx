"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart()

  if (items.length === 0) {
    return (
      <div className="section-container section-pad text-center">
        <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground/40" aria-hidden />
        <h1 className="mt-6 font-display text-2xl font-semibold text-foreground">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add some products from the shop to get started.</p>
        <Button asChild className="mt-8">
          <Link href="/shop">Continue shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="section-container section-pad">
      <h1 className="font-display text-3xl font-semibold text-foreground md:text-4xl">Shopping cart</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 sm:flex-row sm:items-center"
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-md object-cover"
              />
              <div className="flex-1">
                <h2 className="font-medium text-foreground">{item.name}</h2>
                <p className="text-sm text-primary">
                  Rs. {item.price}/{item.unit}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="min-w-[2rem] text-center text-sm">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <p className="font-semibold">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="text-destructive hover:text-destructive"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-lg border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">Order summary</h2>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span>Rs. 200.00</span>
            </div>
            <div className="flex justify-between border-t border-border pt-3 text-base font-semibold">
              <span>Total</span>
              <span className="text-primary">Rs. {(total + 200).toFixed(2)}</span>
            </div>
          </div>
          <Button asChild className="mt-6 w-full" size="lg">
            <Link href="/checkout">Proceed to checkout</Link>
          </Button>
          <Button asChild variant="outline" className="mt-2 w-full">
            <Link href="/shop">Continue shopping</Link>
          </Button>
        </aside>
      </div>
    </div>
  )
}
