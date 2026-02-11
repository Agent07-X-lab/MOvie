/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0a0e1a',
          DEFAULT: '#0a0e1a',
        },
        secondary: {
          bg: '#1a1f35',
          DEFAULT: '#1a1f35',
        },
        card: {
          bg: '#151b2d',
          DEFAULT: '#151b2d',
        },
        accent: {
          gold: '#f4c430',
          DEFAULT: '#f4c430',
        },
        text: {
          primary: '#e8e8e8',
          secondary: '#8a8fa3',
        },
        border: {
          DEFAULT: '#2a2f45',
        },
        rating: {
          star: '#ffd700',
        },
      },
      fontFamily: {
        logo: ['Bebas Neue', 'Oswald', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'Source Sans Pro', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(244, 196, 48, 0.3)',
        'glow-lg': '0 0 30px rgba(244, 196, 48, 0.5)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'navbar': '12px',
      },
      maxWidth: {
        'container': '1400px',
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
      },
    },
  },
  plugins: [],
}
