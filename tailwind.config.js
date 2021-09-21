const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: process.env.TAILWIND_MODE,
  darkMode: false, // or 'media' or 'class'
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
  },
};
