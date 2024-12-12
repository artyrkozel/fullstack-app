import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
      backgroundImage: {
        "login-bg": "url('/login-bg.jpg')"
      },
      colors(theme){
        return {
          primary: {
            DEFAULT: '#E0F64B'
          },
          secondary: {
            DEFAULT: '#171717'
          },
          'bg-page': '#FAFAFA',
          'grey': {
            light: '#F7F7F7',
            medium: '#EBEBEB',
            DEFAULT: '#B8B8B8',
            dark: '#B8B8B8',
          },
          'green': '#1ABC7B',
          'red': '#F13005',
          'border': {
            'ligth': '#e8e8e8'
          }
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
