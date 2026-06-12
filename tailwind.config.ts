import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00bfff',
        surface: '#0b0f17',
        glass: 'rgba(255, 255, 255, 0.08)',
        'electric-blue': '#11b6ff'
      },
      boxShadow: {
        glow: '0 0 45px rgba(0, 191, 255, 0.18)',
      },
      backgroundImage: {
        'hero-fade': 'radial-gradient(circle at top left, rgba(0, 191, 255, 0.2), transparent 30%), radial-gradient(circle at bottom right, rgba(4, 116, 255, 0.18), transparent 25%)'
      }
    },
  },
  plugins: [],
};

export default config;
