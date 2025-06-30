# NebulaHost - IT Services & Consulting Website

A modern, responsive website built with Next.js 15 for an IT services and consulting business. This project showcases best practices in web development with a professional design and comprehensive feature set.

## ✨ Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 15 and React 19 for optimal performance
- **SEO Ready**: Proper meta tags, semantic HTML, and OpenGraph support
- **Accessibility**: Focus states, proper contrast ratios, and semantic markup
- **Smooth Scrolling**: Enhanced user experience with smooth navigation
- **Mobile Navigation**: Collapsible mobile menu with hamburger icon
- **Professional Sections**:
  - Hero section with compelling call-to-action
  - Services showcase with icons and feature lists
  - About section with statistics and process overview
  - Contact section with form and contact information
  - Professional footer with organized links

## 🚀 Technology Stack

- **Framework**: Next.js 15.3.4 (App Router)
- **React**: 19.0.0
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **TypeScript**: Full TypeScript support
- **ESLint**: Code quality and consistency

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd servicessite
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page component
├── components/              # Reusable components (for future expansion)
└── lib/                     # Utility functions (for future expansion)
```

## 🎨 Customization

### Branding
- Update the company name "NebulaHost" in `src/app/page.tsx`
- Modify colors in the Tailwind classes (blue-600, blue-700, etc.)
- Update the logo and favicon in the `public/` directory

### Content
- Edit service descriptions in the Services section
- Update contact information in the Contact section
- Modify the hero section messaging
- Customize the About section statistics and process steps

### Styling
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations and transitions are defined in globals.css

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
```
Then deploy to Vercel with automatic optimizations.

### Other Platforms
```bash
npm run build
npm start
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific variables:
```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

### Tailwind Configuration
The project uses Tailwind CSS 4 with the new CSS-first configuration approach. Custom styles can be added to `globals.css`.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Focus states for keyboard navigation
- Alt text for images
- Color contrast compliance
- Screen reader friendly

## 🚀 Performance Features

- Next.js App Router for optimal loading
- Automatic code splitting
- Image optimization (when images are added)
- CSS optimization with Tailwind
- Tree shaking for minimal bundle size

## 📈 SEO Optimization

- Meta tags for search engines
- OpenGraph tags for social sharing
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about this website template, please contact the development team.

---

Built with ❤️ using Next.js and modern web technologies.
