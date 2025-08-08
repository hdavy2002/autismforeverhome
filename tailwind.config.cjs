/** Autism Forever Home palette */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#7BAEDC", foreground: "#0F172A" }, /* Pale Blue */
        accent: "#7BBE9C",   /* Soft Green */
        cream: "#F4E9D8",    /* Warm Cream */
        yellow: "#F2E6A7",   /* Pale Yellow */
        pink: "#F1C4CF",     /* Soft Pink */
        orange: "#E4A56D",   /* Muted Orange */
        neutral: { 700: "#475467", 600: "#5D6B7A", 500: "#7A6A58" } /* Grays/Browns */
      }
    },
  },
  plugins: [],
};
