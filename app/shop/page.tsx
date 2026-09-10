"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart, MessageCircle, Minus, Plus } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    price: 250,
    unit: "kg",
    category: "greenhouse",
    image: "/placeholder.svg?height=200&width=200",
    stock: 50,
    description: "Premium greenhouse grown tomatoes",
  },
  {
    id: "2",
    name: "Organic Lettuce",
    price: 180,
    unit: "bunch",
    category: "greenhouse",
    image: "/placeholder.svg?height=200&width=200",
    stock: 30,
    description: "Fresh organic lettuce leaves",
  },
  {
    id: "3",
    name: "Bell Peppers",
    price: 320,
    unit: "kg",
    category: "greenhouse",
    image: "/placeholder.svg?height=200&width=200",
    stock: 25,
    description: "Colorful bell peppers",
  },
  {
    id: "4",
    name: "Cucumber",
    price: 200,
    unit: "kg",
    category: "greenhouse",
    image: "/placeholder.svg?height=200&width=200",
    stock: 40,
    description: "Fresh greenhouse cucumbers",
  },
  {
    id: "5",
    name: "Carrots",
    price: 150,
    unit: "kg",
    category: "outdoor",
    image: "/placeholder.svg?height=200&width=200",
    stock: 60,
    description: "Organic outdoor grown carrots",
  },
  {
    id: "6",
    name: "Potatoes",
    price: 120,
    unit: "kg",
    category: "outdoor",
    image: "/placeholder.svg?height=200&width=200",
    stock: 100,
    description: "Fresh potatoes",
  },
  {
    id: "7",
    name: "Rose Plants",
    price: 450,
    unit: "plant",
    category: "nursery",
    image: "/placeholder.svg?height=200&width=200",
    stock: 20,
    description: "Beautiful rose plants",
  },
  {
    id: "8",
    name: "Mango Saplings",
    price: 800,
    unit: "plant",
    category: "nursery",
    image: "/placeholder.svg?height=200&width=200",
    stock: 15,
    description: "Healthy mango saplings",
  },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const { addItem, items } = useCart()
  const { toast } = useToast()

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleQuantityChange = (productId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) + change),
    }))
  }

  const handleAddToCart = (product: (typeof products)[0]) => {
    const quantity = quantities[product.id] || 1
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      unit: product.unit,
      quantity,
    })
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.unit} of ${product.name} added to cart`,
    })
  }

  const handleBulkInquiry = (product: (typeof products)[0]) => {
    toast({
      title: "Bulk inquiry sent",
      description: `We'll contact you about bulk pricing for ${product.name}`,
    })
  }

  return (
    <div>
      <section className="border-b border-border bg-secondary/50">
        <div className="section-container py-14 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Shop</h1>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Fresh produce and nursery plants. Catalog expanding — prices shown are illustrative.
              </p>
            </div>
            {items.length > 0 && (
              <Button asChild variant="outline">
                <Link href="/cart">View cart ({items.length})</Link>
              </Button>
            )}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Input
              placeholder="Search products…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sm:max-w-xs"
            />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="sm:max-w-[220px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All categories</SelectItem>
                <SelectItem value="greenhouse">Greenhouse vegetables</SelectItem>
                <SelectItem value="outdoor">Outdoor crops</SelectItem>
                <SelectItem value="nursery">Nursery plants</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <div className="section-container section-pad !pt-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <article key={product.id} className="flex flex-col overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative aspect-square bg-muted">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover"
                />
                <span className="absolute right-2 top-2 rounded-md bg-background/90 px-2 py-0.5 text-xs capitalize text-foreground">
                  {product.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h2 className="font-display text-lg font-semibold">{product.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="font-semibold text-primary">
                    Rs. {product.price}/{product.unit}
                  </span>
                  <span className="text-xs text-muted-foreground">Stock: {product.stock}</span>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(product.id, -1)}
                    disabled={(quantities[product.id] || 1) <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="min-w-[2rem] text-center text-sm">{quantities[product.id] || 1}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(product.id, 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-4 space-y-2">
                  <Button className="w-full" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to cart
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => handleBulkInquiry(product)}>
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Bulk inquiry
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="py-16 text-center text-muted-foreground">No products found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}
