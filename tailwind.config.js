/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        zero: "#efefef",
        negative: "#111",
        fist: "#1f2937",
        second: "#111827",
        third: "#0099dd",
      },
    },
  },
  plugins: [],
};
