# Gaurav Kathiriya - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion, featuring dark/light theme toggle and 3D animations.

## 🚀 Features

### ✨ Core Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **3D Animations**: Interactive 3D animated characters and elements
- **Smooth Animations**: Beautiful page transitions and hover effects using Framer Motion
- **Modern UI**: Clean, professional design with glassmorphism effects

### 📱 Pages
1. **Home** (`/`) - Hero section with profile, skills overview, and quick contact
2. **About** (`/about`) - Detailed personal story, values, and technical skills
3. **Projects** (`/projects`) - Comprehensive project showcase with filtering
4. **Contact** (`/contact`) - Interactive contact form with social links

### 🎨 Interactive Elements
- **Theme Toggle**: Fixed position toggle with smooth transitions
- **Navigation**: Responsive navigation with mobile menu and floating dots
- **3D Characters**: Animated emoji-based characters on each page
- **Hover Effects**: Enhanced button interactions with tooltips
- **Form Validation**: Real-time form validation with success animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.23.22
- **UI Components**: Radix UI primitives
- **Theme**: next-themes 0.4.6
- **Icons**: Lucide React 0.544.0

## 🏗️ Project Structure

```
src/
├── app/
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── projects/page.tsx       # Projects page
│   ├── layout.tsx              # Root layout with theme provider
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles and theme variables
├── components/
│   ├── ui/                     # Reusable UI components (shadcn/ui)
│   ├── animated-3d-character.tsx  # 3D animated character components
│   ├── navigation.tsx          # Navigation component
│   └── theme-toggle.tsx        # Theme toggle component
└── lib/
    └── utils.ts                # Utility functions
```

## 🎯 Key Components

### Theme Toggle
- **Simple Toggle**: Quick light/dark mode switch
- **Dropdown Toggle**: Full theme options (light, dark, system)
- **Responsive**: Adapts to different screen sizes
- **Tooltips**: Helpful hover text on desktop

### Navigation
- **Fixed Header**: Stays visible while scrolling
- **Mobile Menu**: Collapsible menu for mobile devices
- **Active States**: Visual indication of current page
- **Floating Dots**: Alternative navigation on large screens

### 3D Animations
- **Character Animations**: Rotating, scaling, and floating effects
- **Interactive Elements**: Hover and click animations
- **Performance Optimized**: Smooth 60fps animations
- **Customizable**: Different characters for different pages

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎨 Theme System

The website supports three theme modes:
- **Light Mode**: Clean, bright interface
- **Dark Mode**: Easy on the eyes for low-light environments
- **System Mode**: Automatically matches user's system preference

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/navigation.tsx`

### Modifying Animations
- Edit animation variants in individual page components
- Customize 3D characters in `src/components/animated-3d-character.tsx`
- Adjust timing and easing in Framer Motion configurations

### Styling Changes
- Update theme colors in `src/app/globals.css`
- Modify component styles using Tailwind classes
- Add custom CSS for advanced styling needs

## 📊 Performance Features

- **Optimized Images**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Smooth Animations**: Hardware-accelerated CSS transforms
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 🌟 Future Enhancements

- [ ] Blog section with MDX support
- [ ] Project detail pages
- [ ] Contact form backend integration
- [ ] SEO optimization with metadata
- [ ] Analytics integration
- [ ] Progressive Web App (PWA) features

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

- **Email**: gauravkathiriya145@gmail.com
- **Phone**: +91 9924875063
- **Location**: Surat, Gujarat, India

---

Built with ❤️ by Gaurav Kathiriya