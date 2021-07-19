# Portfolio v1 -- rollup-plugin-fresh DEMO

First iteration of my portfolio site.

This project is now only used as a demo for rollup-plugin-fresh.

Visit current iteration of portfolio by going to [portfolio-svelte-v2](https://github.com/albertopfunk/portfolio-svelte-v2).


## Table of contents
* [General info](#general-info)
* [Get started](#get-started)

## General info

This is an esm project, so all the files are kept in public directory.

rollup-plugin-fresh helps with that by removing all the files from that directory, except the default files(specified in rollup.config.js file).

## Get started

Fork and install the dependencies.

```bash
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

You can start editing files and watch as rollup creates new mapped files as it compiles the project.

Now instead of having to manually remove all the files, you can just restart the server.

```bash
CTRL+c(windows)
```

then

```bash
npm run dev
```

rollup-plugin-fresh will automatically remove the unused files for you so you can start fresh.

Visit [rollup-plugin-fresh README](https://github.com/albertopfunk/rollup-plugin-fresh#readme) for more information and configuration options.
