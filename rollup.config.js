import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import startFresh from "rollup-plugin-fresh";

const production = !process.env.ROLLUP_WATCH;
const plugins = [require("autoprefixer")()];

export default {
  input: "src/index.js",

  output: {
    name: "app",
    format: "esm",
    sourcemap: true,
    dir: "public"
  },

  plugins: [
    // postcss will bundle global+svelte styles
    postcss({ extensions: [ '.css' ], extract: true, minimize: true, plugins }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      emitCss: true,
    }),

    startFresh({
      chosenDir: "./public/",
      deleteAll: false,
      noDeleteOptions: [".html", ".png"],
      quiet: true
    }),

    // used for external dependencies installed from npm
    resolve(),
    commonjs(),

    // live reload when not in production
    !production && livereload("public"),

    // building for production, minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
