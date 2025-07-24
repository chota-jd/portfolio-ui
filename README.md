# 🚀 Modern Portfolio Website

A stunning, fully animated portfolio website built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**. Features a sleek black and yellow theme with beautiful animations and responsive design.

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with black and yellow color scheme
- **🌟 Fully Animated**: Smooth animations and transitions using Framer Motion
- **📱 Responsive**: Works perfectly on all devices and screen sizes
- **⚡ Performance**: Optimized for speed with Next.js 15 and static generation
- **🎯 Interactive**: Hover effects, smooth scrolling, and engaging user interactions
- **💻 Modern Tech Stack**: Built with the latest web technologies

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment Ready**: Optimized for Vercel, Netlify, or any hosting platform

## 🎯 Sections

1. **Hero Section**: Dynamic typing animation with floating background elements
2. **About**: Personal introduction with animated stats and rotating profile frame
3. **Skills**: Interactive skill bars with tech stack showcase
4. **Projects**: Portfolio projects with hover effects and tech badges
5. **Contact**: Contact form with social links and information
6. **Footer**: Social links and quick navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.tsx` - Name and introduction
- `src/components/About.tsx` - About section content
- `src/components/Skills.tsx` - Your skills and technologies
- `src/components/Projects.tsx` - Your portfolio projects
- `src/components/Contact.tsx` - Contact information
- `src/app/layout.tsx` - Meta tags and SEO information

### Colors and Styling
The design uses a black and yellow theme defined in `src/app/globals.css`. Key classes:
- `.gradient-text` - Yellow gradient text
- `.btn-primary` - Yellow buttons
- `.btn-secondary` - Outlined yellow buttons
- `.card-hover` - Hover effects for cards

### Add Your Projects
Edit `src/components/Projects.tsx` and update the `projects` array with:
- Project title and description
- Technologies used
- GitHub and demo links
- Project images/icons

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The built files in the `.next` folder can be deployed to any hosting platform that supports Node.js.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ and lots of ☕**
