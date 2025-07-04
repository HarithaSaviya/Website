import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Settings, ShoppingCart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Growing Smart, Growing Green</h1>
              <p className="text-xl mb-8 text-green-100">
                Premium greenhouse vegetables, outdoor crops, and nursery plants. Plus cutting-edge IoT automation
                systems for modern agriculture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
                  <Link href="/shop">Shop Now</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
                >
                  <Link href="/automation">Explore Automation</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
                >
                  <Link href="/login">Login to Dashboard</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Modern greenhouse with IoT systems"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600">Complete agricultural solutions for modern farming</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fresh Produce</h3>
                <p className="text-gray-600">
                  Premium greenhouse vegetables, outdoor crops, and healthy nursery plants grown with care.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">IoT Automation</h3>
                <p className="text-gray-600">
                  Smart irrigation, climate control, and remote monitoring systems for efficient farming.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <ShoppingCart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Easy Ordering</h3>
                <p className="text-gray-600">
                  Online shopping for retail customers and bulk inquiry system for large orders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Plant Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">25+</div>
              <div className="text-gray-600">IoT Systems Installed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Smart Farming Journey?</h2>
          <p className="text-xl mb-8 text-green-100">Join hundreds of satisfied customers who trust Haritha Saviya</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
              <Link href="/shop">Browse Products</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-800 bg-transparent"
            >
              <Link href="/contact">Get Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
