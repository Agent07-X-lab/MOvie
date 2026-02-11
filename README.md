# CineSearch - Movie Database Frontend

A modern, responsive movie database web application with a dark cinematic aesthetic built with React, Vite, and Tailwind CSS.

## Features

- 🎬 **Featured Hero Section** - Showcases featured movies with stunning visuals
- 🔥 **Trending Movies** - Horizontal scrollable section with latest trending films
- ⭐ **Top Rated** - Display highest-rated movies in your collection
- 🎯 **Movie Details** - Comprehensive movie information pages with:
  - AI-generated movie analysis
  - Cast information
  - Related movie recommendations
  - Storyline and metadata
- 🔍 **Search Functionality** - Search movies by title
- 📱 **Responsive Design** - Fully responsive layout for all devices
- ✨ **Smooth Animations** - Framer Motion powered animations
- 🎨 **Premium Dark Theme** - Cinematic gold accent colors

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js v20+ or v22+
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
```bash
cd Amlan/cinesearch
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
cinesearch/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── Button.jsx
│   │   ├── Rating.jsx
│   │   ├── Badge.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Section.jsx
│   │   ├── AIAnalysis.jsx
│   │   └── Cast.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   └── MovieDetail.jsx
│   ├── data/           # Mock data
│   │   └── mockMovies.js
│   ├── utils/          # Utility functions
│   │   └── formatters.js
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles with Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Design System

### Colors

- **Primary Background**: `#0a0e1a` (Deep navy-black)
- **Secondary Background**: `#1a1f35` (Dark blue-grey)
- **Card Background**: `#151b2d`
- **Accent Gold**: `#f4c430` (Primary CTA and highlights)
- **Text Primary**: `#e8e8e8` (Light grey)
- **Text Secondary**: `#8a8fa3` (Muted grey)
- **Border**: `#2a2f45`
- **Rating Star**: `#ffd700`

### Typography

- **Logo**: Bebas Neue, Oswald (Bold geometric sans-serif)
- **Headings**: Poppins, Montserrat (Bold)
- **Body**: Inter, Source Sans Pro

### Spacing

- Container Max Width: 1400px
- Grid Gaps: 24px
- Section Spacing: 60px vertical
- Card Padding: 16-20px
- Border Radius: 12px (cards), 8px (buttons)

## Features in Detail

### Home Page
- Large hero banner with featured movie
- Trending Now section with horizontal scroll
- Top Rated section with highest-rated movies
- Smooth scroll animations and hover effects

### Movie Detail Page
- Large movie poster (sticky on desktop)
- Movie metadata (rating, year, runtime)
- AI-generated movie analysis with glow effect
- Director and genre information
- Full storyline
- Top cast members
- Related movie recommendations

### Interactive Elements
- Movie cards scale on hover with gold glow effect
- Buttons with hover and press animations
- Smooth horizontal scrolling
- Responsive navigation

## Future Enhancements

- [ ] Search functionality implementation
- [ ] Filter by genre
- [ ] Sort options (rating, year, popularity)
- [ ] Watchlist feature with localStorage
- [ ] User reviews
- [ ] Trailer video player modal
- [ ] Dark/light theme toggle
- [ ] Backend API integration

## License

This project is for educational purposes.

## Credits

Movie poster images sourced from:
- Pixabay
- Pexels
- Unsplash

Icons by Lucide React
