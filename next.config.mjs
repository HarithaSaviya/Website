/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/automation", destination: "/", permanent: false },
      { source: "/blog", destination: "/", permanent: false },
      { source: "/blog/:path*", destination: "/", permanent: false },
      { source: "/shop", destination: "/", permanent: false },
      { source: "/cart", destination: "/", permanent: false },
      { source: "/checkout", destination: "/", permanent: false },
      { source: "/login", destination: "/", permanent: false },
      { source: "/dashboard", destination: "/", permanent: false },
    ]
  },
}

export default nextConfig
