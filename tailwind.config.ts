import type {Config} from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
    },
    colors: {
      light: '#FFFFFF',
      'primary-300': '#FFCC21',
      'primary-400': '#FF963C',
      'primary-500': '#EA6C00',
      'secondary-300': '#8FE9D0',
      'dark-600': '#2E2E2E',
      'dark-500': '#414141',
      'gray-400': '#777777',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'primary-gradient':
          'linear-gradient(33deg, #FFCC21 8.75%, #FF963C 86.64%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
};

export default config;
