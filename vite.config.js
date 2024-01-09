import {defineConfig} from "vite";
import {resolve} from "path";
import {createHtmlPlugin} from "vite-plugin-html";
import terser from "@rollup/plugin-terser";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/vite-chartjs/" : "./",
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
        lineBar: resolve(__dirname, "./src/views/lineWithBar.html"),
        lineVertical: resolve(__dirname, "./src/views/lineVertical.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo && assetInfo.name) {
            let extType = assetInfo.name.split(".").pop().toLowerCase();
            if (extType) {
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "images";
                return `assets/${extType}/[name]-[hash][extname]`;
              }
            }
          }
          return "assets/css/[name]-[hash][extname]";
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
  plugins: [
    terser({
      compress: {
        drop_console: true,
      },
      mangle: {
        toplevel: true,
      },
      output: {
        beautify: false,
      },
      keep_classnames: false,
      keep_fnames: false,
    }),
    createHtmlPlugin({minify: true}),
  ],
  server: {
    open: true,
    logLevel: "info",
  },
});
