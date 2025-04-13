# FastFix Website

A modern, SEO-optimized website for FastFix, a professional glass and door repair company serving the DMV area. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 Next.js 14 with App Router
- 📱 Mobile-first responsive design
- 🎨 Tailwind CSS for styling
- 🔍 SEO optimized with metadata
- 📝 TypeScript for type safety
- 🖼️ Image optimization with next/image
- 🗺️ Dynamic sitemap generation
- 🤖 Robots.txt configuration
- 📱 Mobile-friendly navigation

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fastfix-website.git
cd fastfix-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://fastfix.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [https://fastfixglassanddoor.com](https://fastfixglassanddoor.com) in your browser.

## Project Structure

```
fastfix-website/
├── public/              # Static files
│   ├── images/         # Image assets
│   ├── robots.txt      # Robots configuration
│   └── favicon.ico     # Site favicon
├── src/
│   ├── app/           # App router pages
│   ├── components/    # React components
│   └── styles/        # Global styles
├── next.config.js     # Next.js configuration
├── tailwind.config.ts # Tailwind CSS configuration
└── package.json       # Project dependencies
```

## SEO Optimization

The website is optimized for search engines with:

- Meta tags and descriptions
- OpenGraph and Twitter card support
- Dynamic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Mobile-first responsive design
- Fast loading performance

## Performance Optimization

- Image optimization with next/image
- Font optimization with next/font
- Static page generation where possible
- Code splitting and lazy loading
- Tailwind CSS for minimal CSS bundle

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
