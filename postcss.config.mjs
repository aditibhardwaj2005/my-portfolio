/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    // autoprefixer: {},  // optional, Tailwind v4 often doesn't need it
  },
};

export default config;