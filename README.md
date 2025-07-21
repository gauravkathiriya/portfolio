# My Portfolio

A modern portfolio website built with Next.js and Ant Design for UI components, featuring smooth page transitions.

## Features

- **Modern Tech Stack**: Next.js, TypeScript, Tailwind CSS
- **Smooth Page Transitions**: Using CSS animations
- **Responsive Design**: Looks great on all devices
- **Beautiful UI Components**: Using Ant Design
- **Portfolio Sections**: Home, About, Projects, and Contact pages

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/` - Next.js app directory containing pages and layouts
- `components/` - Reusable React components
- `public/` - Static assets like images and fonts

## Customization

### Personal Information

Update your personal information in the following files:

- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/projects/page.tsx` - Project data
- `app/contact/page.tsx` - Contact information

### Profile Image

Add your profile image to the `public` directory as `your-profile-image.jpg`. This image will be used in the Home and About pages.

### Styling

- Global styles are defined in `app/globals.css`
- Theme configuration is in `app/layout.tsx`

## Deployment

This project can be easily deployed to Vercel:

```bash
npm run build
# or
yarn build
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Ant Design](https://ant.design/) - UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [Ant Design Documentation](https://ant.design/components/overview/)
