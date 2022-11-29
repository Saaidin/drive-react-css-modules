/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'epilogue-1': ['Epilogue', 'sans-serif'],
      },
      colors: {
        'blue-rgba-1': 'rgba(173, 199, 255, 0.502)',
        'blue-rgba-2': 'rgba(171, 197, 255, 0.502)',
        'white-rgba-3': 'rgba(247, 247, 247, 0.9)',
      },
      boxShadow: {
        'boxsha-1': 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        'boxsha-2': 'rgba(0, 0, 0, 0.9) 0px 8px 24px',
      },
      backgroundImage: {
        'hero-bgi-1': "url('https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80')",
      }
    },
  },
  plugins: [],
}
