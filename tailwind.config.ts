import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme';

export const colors = {
  red: '#fe4040'
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ' var(--font-roboto)',
        alt: 'var(--font-space-grotesk)',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
