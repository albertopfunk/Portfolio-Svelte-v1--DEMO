import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import preprocess from "svelte-preprocess";
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
    postcss({ extract: "public/global.css", minimize: true, plugins }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,

      preprocess: preprocess({ postcss: { plugins } }),

      // extract any component CSS out into a separate file
      css: css => {
        css.write("public/bundle.css");
      }
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
