/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-gray": "0px 1px 6px 2px rgba(166, 164, 164, 0.71)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "25px": "20px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".placeholder-roboto": {
          "@apply placeholder:text-25px placeholder:font-roboto": {},
        },
      });
    },
  ],
};
