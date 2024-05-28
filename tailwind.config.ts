import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-murecho)'],
      },
      colors: {
        primary: {
          200: '#EBF0F5',
          300: '#E8F3FF',
          400: '#1882FF',
          DEFAULT: '#1882FF',
        },
        secondary: {
          300: '#F5F7FA',
          400: '#5A6573',
          500: '#3E4957',
          DEFAULT: '#5A6573',
        },
        tertiary: {
          200: '#FFEEDB',
          300: '#FFE1C2',
          400: '#F27D00',
          DEFAULT: '#F27D00',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
