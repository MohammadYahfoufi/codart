# Codart Portfolio

A modern, responsive portfolio website built with Next.js 14, featuring a beautiful space theme and interactive 3D elements.

## 🚀 Live Demo

Visit the live site: [https://mohammadyahfoufi.github.io/codart](https://mohammadyahfoufi.github.io/codart)

## ✨ Features

- **Modern Design**: Clean, space-themed UI with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **3D Elements**: Interactive 3D planet model in the contact section
- **Skills Showcase**: Beautiful pyramid layout showcasing technical skills
- **Services Section**: 3D card animations for service offerings
- **Contact Form**: Interactive contact form with validation
- **Performance**: Optimized for speed and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Heroicons, React Icons
- **TypeScript**: Full type safety

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/MohammadYahfoufi/codart.git
cd codart
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for GitHub Pages deployment using GitHub Actions.

### Automatic Deployment

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at `https://mohammadyahfoufi.github.io/codart`

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📁 Project Structure

```
codart/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── main/              # Main page components
│   ├── sub/               # Sub-components
│   └── ui/                # UI components
├── constants/              # Configuration and data
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── skills/            # Skill logos
│   └── videos/            # Background videos
└── .github/workflows/      # GitHub Actions
```

## 🎨 Customization

- **Skills**: Update `constants/index.ts` to modify skills and their sizes
- **Projects**: Add your projects in the `PROJECTS` array
- **Contact**: Update contact information in the contact component
- **Styling**: Modify Tailwind classes for custom styling

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: contact@codart.dev
- **GitHub**: [@MohammadYahfoufi](https://github.com/MohammadYahfoufi)
- **Website**: [https://mohammadyahfoufi.github.io/codart](https://mohammadyahfoufi.github.io/codart)