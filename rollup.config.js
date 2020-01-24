import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import startFresh from 'rollup-plugin-fresh';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    name: 'app',
    format: 'esm',
    sourcemap: true,
    dir: 'public'
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      
      // extract any component CSS out into a separate file
      css: css => {
        css.write('public/bundle.css');
      }
    }),

    startFresh({
      chosenDir: "./public/",
      deleteAll: false,
      noDeleteOptions: ["global.css", ".html", ".png"],
      quiet: false
    }),

    // used for external dependencies installed from npm
    resolve(),
    commonjs(),

    // live reload when not in production
    !production && livereload('public'),

    // building for production, minify
    production && terser()
  ],
  watch: {
    clearScreen: false
  }
};
