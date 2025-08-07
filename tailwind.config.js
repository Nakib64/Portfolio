/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class", // ✅ enables class-based dark mode
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}", // optional if using /src structure
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
      },
    },
  },
  plugins: [
   
  ],
};
