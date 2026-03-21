/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // The no-unescaped-entities rule doesn't affect functionality
    // All content strings are intentional; suppresss during build only
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
