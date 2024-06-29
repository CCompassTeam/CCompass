import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        gradient: {
          'text-l': '#1024D3',
          'text-r': '#FF00E5',
          'button-l': '#3D15DC',
          'button-r': '#C502F6',
          'background-t': '#E6E2FA',
          'background-m': '#F8EEFC',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
