/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // IMPORTANT: This should match your repository name
  basePath: process.env.NODE_ENV === 'production' ? '/Prathambattamwar' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
