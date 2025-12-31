import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['md', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    localPatterns: [
      {
        pathname: '/images/**',
        search: '',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Themed-By',
            value: 'Enju Folio',
          },
          {
            key: 'X-Theme-Author',
            value: 'ZL Asica',
          },
          {
            key: 'X-Theme-URL',
            value: 'https://github.com/ZL-Asica/EnjuFolio/',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/teaching',
        destination: '/cv',
        permanent: true,
      },
      {
        source: '/news',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      'remark-mdx-frontmatter',
      'remark-gfm',
      'remark-gemoji',
      'remark-math',
    ],
    rehypePlugins: [
      ['rehype-katex', { strict: true, throwOnError: true }],
      'rehype-unwrap-images',
    ],
  },
})

export default withMDX(nextConfig)
