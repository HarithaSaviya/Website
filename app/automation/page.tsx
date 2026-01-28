import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Thermometer, Wind, Smartphone, BarChart3, Settings, Wifi, Shield, Clock } from "lucide-react"

export default function AutomationPage() {
  const features = [
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated watering based on soil moisture levels and weather conditions",
    },
    {
      icon: Thermometer,
      title: "Climate Control",
      description: "Maintain optimal temperature and humidity for your crops",
    },
    {
      icon: Wind,
      title: "Ventilation Management",
      description: "Automatic fan control for proper air circulation",
    },
    {
      icon: Smartphone,
      title: "Remote Monitoring",
      description: "Control and monitor your greenhouse from anywhere",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Track growth patterns and optimize farming decisions",
    },
    {
      icon: Settings,
      title: "Custom Automation",
      description: "Set personalized schedules and thresholds",
    },
  ]

  const packages = [
    {
      name: "Basic IoT Package",
      price: "Rs. 45,000",
      features: [
        "Soil moisture sensors (4x)",
        "Temperature & humidity sensor",
        "Basic irrigation control",
        "Mobile app access",
        "Email alerts",
      ],
      popular: false,
    },
    {
      name: "Advanced IoT Package",
      price: "Rs. 85,000",
      features: [
        "All Basic features",
        "Weather station integration",
        "Advanced climate control",
        "Automated ventilation",
        "Data analytics dashboard",
        "24/7 support",
      ],
      popular: true,
    },
    {
      name: "Professional IoT Package",
      price: "Rs. 150,000",
      features: [
        "All Advanced features",
        "AI-powered recommendations",
        "Multi-zone control",
        "Integration with existing systems",
        "Custom automation rules",
        "On-site installation & training",
      ],
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Smart Agriculture Solutions</h1>
              <p className="text-xl mb-8 text-green-100">
                Transform your farming with IoT-powered automation systems. Monitor, control, and optimize your
                greenhouse operations remotely.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
                  <Link href="#packages">View Packages</Link>
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
            <div className="relative">
              <Image
                src="/automation/img_01.jpg?height=400&width=600"
                alt="IoT Agriculture Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">System Features</h2>
            <p className="text-lg text-gray-600">Comprehensive automation for modern farming</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-green-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600">Simple setup, powerful results</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <p className="text-gray-600">Our team installs sensors and control systems in your greenhouse</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Configuration</h3>
              <p className="text-gray-600">Set up automation rules and thresholds for your specific crops</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitor</h3>
              <p className="text-gray-600">Track real-time data through our mobile app and web dashboard</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimize</h3>
              <p className="text-gray-600">Make data-driven decisions to improve crop yield and quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">IoT Packages</h2>
            <p className="text-lg text-gray-600">Choose the perfect solution for your farming needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-green-500 shadow-lg" : "border-green-200"}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-green-600 hover:bg-green-700" : "bg-green-600 hover:bg-green-700"}`}
                    asChild
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our IoT Solutions?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Wifi className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Always Connected</h3>
              <p className="text-green-100">Reliable internet connectivity ensures your system is always online</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
              <p className="text-green-100">Enterprise-grade security protects your data and systems</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-green-100">Round-the-clock technical support when you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Ready to Modernize Your Farm?</h2>
          <p className="text-xl mb-8 text-gray-600">
            Get a free consultation and see how IoT can transform your agriculture
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              <Link href="/login">View Demo Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
