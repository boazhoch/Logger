import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import ts from "@wessberg/rollup-plugin-ts";
// import pkg from "./package.json";
// import livereload from "rollup-plugin-livereload";
// import dev from "rollup-plugin-dev";
// import koaBody from "koa-body";
// import htmlTemplate from "rollup-plugin-generate-html-template";
import process from "process";
import webWorkerLoader from "rollup-plugin-web-worker-loader";

const isDev = process.env.BUILD === "development";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const devPlugins = () =>
  isDev
    ? [
        // htmlTemplate({
        //   template: "index.html",
        //   target: "index.html",
        // }),
        // dev({
        //   dirs: ["dev/dist"],
        //   port: 8081,
        //   extend(app, modules) {
        //     app.use(koaBody({ multipart: true }));
        //     app.use(
        //       modules.router.post("/log", (ctx, next) => {
        //         console.log(ctx.request.body);
        //         ctx.body = { ok: true };
        //       })
        //     );
        //   },
        // }),
        // livereload(),
      ]
    : [terser()];

const config = [
  // {
  //   input: "src/index.ts",
  //   output: {
  //     sourcemap: isDev,
  //     file: `${isDev ? "dev/" : ""}${pkg.main}`,
  //     format: "cjs",
  //   },
  //   plugins: [ts(), resolve({ extensions }), commonjs(), webWorkerLoader(), ...devPlugins()],
  // },
  {
    input: ["./src/index.ts"],
    output: [{ dir: "dist", format: "esm", entryFileNames: "[name].mjs", sourcemap: true }],
    plugins: [resolve(), commonjs(), webWorkerLoader(/* { inline: false } */), ts({ tsconfig: "./tsconfig.es6.json" }), ...devPlugins()],
  },
];

export default config;
