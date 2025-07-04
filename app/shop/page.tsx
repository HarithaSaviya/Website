"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/hooks/use-toast"
import { ShoppingCart, MessageCircle, Minus, Plus } from "lucide-react"

// Mock product data
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
  const { addItem } = useCart()
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-4">Our Products</h1>
        <p className="text-gray-600 mb-6">Fresh produce and healthy plants delivered to your doorstep</p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:w-1/3"
          />
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="md:w-1/4">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="greenhouse">Greenhouse Vegetables</SelectItem>
              <SelectItem value="outdoor">Outdoor Crops</SelectItem>
              <SelectItem value="nursery">Nursery Plants</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="relative mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Badge className="absolute top-2 right-2 bg-green-600">{product.category}</Badge>
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-green-600">
                  Rs. {product.price}/{product.unit}
                </span>
                <span className="text-sm text-gray-500">Stock: {product.stock}</span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center mb-4 space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuantityChange(product.id, -1)}
                  disabled={(quantities[product.id] || 1) <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 border rounded">{quantities[product.id] || 1}</span>
                <Button variant="outline" size="sm" onClick={() => handleQuantityChange(product.id, 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 space-y-2">
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => handleAddToCart(product)}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                onClick={() => handleBulkInquiry(product)}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Bulk Inquiry
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  )
}
