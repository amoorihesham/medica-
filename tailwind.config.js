/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mBlue: '#164B60',
        sBlue: '#1B6B93',
        mGreen: '#A2FF86',
        mpink: '#FFF7F7',
        header_color: '#164B60',
        normal: '#363839',
      },
      fontSize: {
        header_size: '40px',
      },
    },
  },
  plugins: [],
};
