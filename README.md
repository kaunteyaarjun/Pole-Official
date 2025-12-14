# POLE Agency Website

A stunning cosmic-themed website for POLE creative agency featuring interactive background animations, professional services showcase, and premium design.

## 🚀 Getting Started

### Prerequisites
- Node.js installed on your computer
- npm (comes with Node.js)

### Running the Website

1. **Navigate to the project directory**:
   ```bash
   cd "c:\Users\somya\Downloads\pole\pole website"
   ```

2. **Install dependencies** (only needed the first time or after pulling new changes):
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

The website will be running locally and will automatically reload when you make changes to the code.

### Stopping the Server

Press `Ctrl + C` in the terminal to stop the development server.

---

## 🎨 Features

- **Interactive Cosmic Background**: Multi-layered particle system with stars, nebulae, and shooting stars
- **Mouse Interactions**: Parallax effects, particle attraction, and cursor glow
- **Professional Services Section**: Detailed service offerings with feature lists
- **Responsive Design**: Works on all screen sizes
- **Smooth Animations**: Premium micro-interactions throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS-in-JS with custom animations
- **Animations**: Framer Motion
- **Font**: Outfit (Google Fonts)

## 📁 Project Structure

```
pole website/
├── app/
│   ├── page.js          # Main homepage
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── components/
│   ├── CosmicBackground.jsx   # Animated background
│   └── Navigation.jsx         # Navigation overlay
├── public/
│   └── logo.png        # POLE logo
└── package.json        # Dependencies
```

## 🎯 Building for Production

When ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

---

## 📝 Notes

- The cosmic background uses HTML5 Canvas for performance
- All animations are optimized for 60fps
- The site is fully responsive and works on all devices

---

**POLE Agency** © 2024
