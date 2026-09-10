"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, Truck, MapPin } from "lucide-react"

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    deliveryMethod: "delivery",
    paymentMethod: "card",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Order placed successfully!",
      description: "You will receive a confirmation email shortly.",
    })
    clearCart()
  }

  if (items.length === 0) {
    return (
      <div className="section-container section-pad text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">No items to checkout</h1>
        <Button asChild className="mt-6">
          <Link href="/shop">Continue shopping</Link>
        </Button>
      </div>
    )
  }

  const deliveryFee = formData.deliveryMethod === "delivery" ? 200 : 0

  return (
    <div className="section-container section-pad">
      <h1 className="font-display text-3xl font-semibold text-foreground md:text-4xl">Checkout</h1>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <fieldset className="space-y-4 rounded-lg border border-border bg-card p-6">
            <legend className="font-display text-lg font-semibold px-1">Personal information</legend>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
              />
            </div>
          </fieldset>

          <fieldset className="space-y-4 rounded-lg border border-border bg-card p-6">
            <legend className="font-display text-lg font-semibold px-1">Delivery</legend>
            <RadioGroup
              value={formData.deliveryMethod}
              onValueChange={(value) => handleInputChange("deliveryMethod", value)}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="delivery" id="delivery" />
                <Label htmlFor="delivery" className="flex items-center font-normal">
                  <Truck className="mr-2 h-4 w-4" />
                  Home delivery (Rs. 200)
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="pickup" id="pickup" />
                <Label htmlFor="pickup" className="flex items-center font-normal">
                  <MapPin className="mr-2 h-4 w-4" />
                  Store pickup (free)
                </Label>
              </div>
            </RadioGroup>

            {formData.deliveryMethod === "delivery" && (
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal code</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange("postalCode", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </fieldset>

          <fieldset className="space-y-4 rounded-lg border border-border bg-card p-6">
            <legend className="font-display text-lg font-semibold px-1">Payment</legend>
            <RadioGroup
              value={formData.paymentMethod}
              onValueChange={(value) => handleInputChange("paymentMethod", value)}
              className="space-y-3"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card" className="flex items-center font-normal">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Credit / debit card
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="payhere" id="payhere" />
                <Label htmlFor="payhere" className="font-normal">
                  PayHere
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="font-normal">
                  Cash on delivery
                </Label>
              </div>
            </RadioGroup>
          </fieldset>
        </div>

        <aside className="h-fit rounded-lg border border-border bg-card p-6">
          <h2 className="font-display text-lg font-semibold">Order summary</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between gap-4">
                <span className="text-muted-foreground">
                  {item.name} × {item.quantity}
                </span>
                <span>Rs. {(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>Rs. {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Delivery</span>
              <span>Rs. {deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-semibold">
              <span>Total</span>
              <span className="text-primary">Rs. {(total + deliveryFee).toFixed(2)}</span>
            </div>
          </div>
          <Button type="submit" className="mt-6 w-full" size="lg">
            Place order
          </Button>
        </aside>
      </form>
    </div>
  )
}
