import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import css from "rollup-plugin-css-only";
import sveltePreprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;
process.env.TAILWIND_MODE = production ? "jit" : undefined;

export default [
  {
    input: "src/main.js",
    output: {
      sourcemap: false,
      format: "iife",
      name: "app",
      file: "dist/app.js",
    },
    plugins: [
      svelte({
        compilerOptions: {
          dev: !production,
        },
        preprocess: sveltePreprocess({
          sourceMap: !production,
          postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
          },
        }),
      }),
      css({ output: "bundle.css" }),

      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),

      !production && serve(),

      !production && livereload("public"),

      production && terser(),
    ],
    watch: {
      clearScreen: false,
    },
  },
  {
    input: "src-ext/content.js",
    output: {
      sourcemap: false,
      format: "iife",
      name: "app",
      file: "dist/content.js",
    },
    plugins: [
      commonjs(),

      !production && serve(),

      !production && livereload("public"),

      production && terser(),
    ],
  },
  {
    input: "src-ext/background.js",
    output: {
      sourcemap: false,
      format: "iife",
      name: "app",
      file: "dist/background.js",
    },
    plugins: [
      commonjs(),

      !production && serve(),

      !production && livereload("public"),

      production && terser(),
    ],
  },
];
