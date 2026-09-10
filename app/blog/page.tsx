import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog — Growing tips & farm notes",
  description: "Agriculture tips and farm notes from Haritha Saviya. Content expanding.",
  robots: { index: false, follow: false },
}

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Greenhouse Vegetable Growing",
    excerpt:
      "Learn the fundamental techniques for successful greenhouse cultivation, from soil preparation to harvest timing.",
    image: "/home/home_img.jpg",
    category: "Growing Tips",
    author: "Haritha Saviya",
    date: "2024-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "IoT Revolution in Agriculture: A Beginner's Guide",
    excerpt:
      "Discover how Internet of Things technology is transforming modern farming practices and increasing crop yields.",
    image: "/automation/img_01.jpg",
    category: "Technology",
    author: "Haritha Saviya",
    date: "2024-01-10",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Seasonal Crop Planning for Sri Lankan Climate",
    excerpt:
      "Optimize your harvest with our comprehensive guide to planting schedules based on local weather patterns.",
    image: "/about/img_01.jpg",
    category: "Planning",
    author: "Haritha Saviya",
    date: "2024-01-05",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Water Conservation Techniques for Smart Farming",
    excerpt: "Implement efficient irrigation methods that reduce water usage while maintaining optimal crop health.",
    image: "/home/home_img.jpg",
    category: "Sustainability",
    author: "Haritha Saviya",
    date: "2023-12-28",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Common Plant Diseases and Natural Prevention Methods",
    excerpt: "Identify and prevent common plant diseases using organic and environmentally friendly approaches.",
    image: "/about/img_01.jpg",
    category: "Plant Care",
    author: "Haritha Saviya",
    date: "2023-12-20",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Setting Up Your First IoT Monitoring System",
    excerpt: "Step-by-step guide to installing and configuring sensors for automated greenhouse monitoring.",
    image: "/automation/img_01.jpg",
    category: "Technology",
    author: "Haritha Saviya",
    date: "2023-12-15",
    readTime: "12 min read",
  },
]

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <div>
      <section className="border-b border-border bg-secondary/50">
        <div className="section-container py-14 md:py-20">
          <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">Farm notes</h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Growing tips and smart farming ideas. Full articles coming soon — browse previews below.
          </p>
        </div>
      </section>

      <div className="section-container section-pad">
        <article className="grid gap-8 border-b border-border pb-14 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-widest text-primary">{featured.category}</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground md:text-3xl">{featured.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" aria-hidden />
              {featured.date} · {featured.readTime}
            </p>
            <Button asChild className="mt-6 w-fit">
              <Link href="/contact">
                Ask about this topic <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </article>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <li key={post.id} className="group">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <p className="text-xs font-medium uppercase tracking-widest text-primary">{post.category}</p>
              <h2 className="mt-1 font-display text-lg font-semibold text-foreground line-clamp-2">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {post.date} · {post.readTime}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center md:p-10">
          <h2 className="font-display text-2xl font-semibold">Stay in touch</h2>
          <p className="mx-auto mt-2 max-w-md text-muted-foreground">
            Prefer a direct line? Contact us or WhatsApp for farm updates and visit arrangements.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input type="email" placeholder="Your email (coming soon)" disabled className="flex-1" />
            <Button asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
