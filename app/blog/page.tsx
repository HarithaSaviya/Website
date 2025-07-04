import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Greenhouse Vegetable Growing",
    excerpt:
      "Learn the fundamental techniques for successful greenhouse cultivation, from soil preparation to harvest timing.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Growing Tips",
    author: "Priya Wickramasinghe",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "IoT Revolution in Agriculture: A Beginner's Guide",
    excerpt:
      "Discover how Internet of Things technology is transforming modern farming practices and increasing crop yields.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    author: "Kasun Perera",
    date: "2024-01-10",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Seasonal Crop Planning for Sri Lankan Climate",
    excerpt:
      "Optimize your harvest with our comprehensive guide to planting schedules based on local weather patterns.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Planning",
    author: "Sanduni Fernando",
    date: "2024-01-05",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Water Conservation Techniques for Smart Farming",
    excerpt: "Implement efficient irrigation methods that reduce water usage while maintaining optimal crop health.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Sustainability",
    author: "Priya Wickramasinghe",
    date: "2023-12-28",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Common Plant Diseases and Natural Prevention Methods",
    excerpt: "Identify and prevent common plant diseases using organic and environmentally friendly approaches.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Plant Care",
    author: "Sanduni Fernando",
    date: "2023-12-20",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Setting Up Your First IoT Monitoring System",
    excerpt: "Step-by-step guide to installing and configuring sensors for automated greenhouse monitoring.",
    image: "/placeholder.svg?height=200&width=400",
    category: "Technology",
    author: "Kasun Perera",
    date: "2023-12-15",
    readTime: "12 min read",
  },
]

const categories = ["All", "Growing Tips", "Technology", "Planning", "Sustainability", "Plant Care"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Agriculture Blog & Tips</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Expert insights, growing tips, and the latest in smart farming technology
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={
                category === "All"
                  ? "bg-green-600 hover:bg-green-700"
                  : "border-green-600 text-green-600 hover:bg-green-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <Card className="mb-12 border-green-200 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <Image
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <Badge className="mb-3 bg-green-600">{blogPosts[0].category}</Badge>
              <h2 className="text-2xl font-bold text-green-800 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <User className="h-4 w-4 mr-1" />
                <span className="mr-4">{blogPosts[0].author}</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{blogPosts[0].date}</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href={`/blog/${blogPosts[0].id}`}>
                  Read More <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="border-green-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-600">{post.category}</Badge>
                <CardTitle className="text-lg text-green-800 line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                  >
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-16 border-green-200 bg-green-50">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest farming tips, technology updates, and seasonal advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
