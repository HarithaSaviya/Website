import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Award, Target, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We're committed to environmentally friendly farming practices that protect our planet for future generations.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing cutting-edge technology to revolutionize traditional farming methods and increase efficiency.",
    },
    {
      icon: Heart,
      title: "Quality",
      description:
        "Every product we grow and every system we install meets the highest standards of quality and reliability.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Supporting local farmers and communities through knowledge sharing and sustainable practices.",
    },
  ]

  const team = [
    {
      name: "Priya Wickramasinghe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
      description: "Agricultural engineer with 15+ years of experience in sustainable farming.",
    },
    {
      name: "Kasun Perera",
      role: "IoT Systems Director",
      image: "/placeholder.svg?height=200&width=200",
      description: "Technology expert specializing in agricultural automation and IoT solutions.",
    },
    {
      name: "Sanduni Fernando",
      role: "Head of Operations",
      image: "/placeholder.svg?height=200&width=200",
      description: "Operations specialist ensuring quality from farm to customer delivery.",
    },
  ]

  const achievements = [
    { number: "500+", label: "Happy Customers" },
    { number: "25+", label: "IoT Systems Installed" },
    { number: "50+", label: "Plant Varieties" },
    { number: "5", label: "Years of Excellence" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Haritha Saviya</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Pioneering the future of agriculture through sustainable farming practices and innovative IoT technology
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2019, Haritha Saviya began as a small greenhouse operation with a big vision: to transform
                agriculture through sustainable practices and smart technology. What started as a passion project has
                grown into Sri Lanka's leading provider of fresh produce and agricultural IoT solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began when our founder, Priya Wickramasinghe, recognized the need for more efficient and
                sustainable farming methods. Combining her agricultural expertise with cutting-edge IoT technology, she
                created systems that not only increase crop yields but also conserve water and reduce environmental
                impact.
              </p>
              <p className="text-gray-600">
                Today, we serve hundreds of customers across Sri Lanka, from individual households seeking fresh produce
                to large-scale farmers implementing smart agriculture solutions. Our commitment to quality,
                sustainability, and innovation remains at the heart of everything we do.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Haritha Saviya greenhouse facility"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To provide fresh, high-quality produce while empowering farmers with innovative IoT solutions that
                  promote sustainable agriculture and improve crop yields.
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-8 text-center">
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading force in Sri Lanka's agricultural transformation, creating a sustainable future
                  where technology and nature work in perfect harmony.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people behind Haritha Saviya</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge className="mb-3 bg-green-600">{member.role}</Badge>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-green-100">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-green-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "The IoT system from Haritha Saviya has revolutionized my farming. I can monitor and control
                  everything from my phone, and my crop yields have increased by 40%."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Nimal Rajapaksa</p>
                    <p className="text-sm text-gray-500">Greenhouse Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "Fresh vegetables delivered right to my door! The quality is exceptional and the online ordering
                  system is so convenient. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Chamari Silva</p>
                    <p className="text-sm text-gray-500">Regular Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  "The nursery plants I bought are thriving in my garden. The team's expertise and after-sales support
                  have been outstanding."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/placeholder.svg?height=50&width=50"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="rounded-full mr-3"
                  />
                  <div>
                    <p className="font-semibold">Rohan Fernando</p>
                    <p className="text-sm text-gray-500">Home Gardener</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
