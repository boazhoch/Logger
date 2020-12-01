import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import ts from '@wessberg/rollup-plugin-ts'
import pkg from './package.json'
import livereload from 'rollup-plugin-livereload'
import dev from 'rollup-plugin-dev'
import koaBody from 'koa-body'
import htmlTemplate from 'rollup-plugin-generate-html-template'


const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default [
  {
    input: 'src/index.ts',
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    output: [
      {
        sourcemap: true,
        file: pkg.main,
        format: 'cjs',
      },
      {
        sourcemap: true,
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [
      htmlTemplate({
        template: 'index.html',
        target: 'index.html',
      }),
      ts(),
      json(),
      resolve({ extensions }),
      commonjs(),
      babel({
        extensions,
        include: ['src/**/*'],
      }),
      terser(),
      dev({dirs: ['dist'], port: 8000, extend(app, modules) { 
        app.use(koaBody({ multipart: true }))
        app.use(modules.router.post('/logs', (ctx, next) => {
          console.log(ctx.request.body)
          ctx.body = {ok: true}
        }))}, 
      }),
      livereload(),
    ],
    // {
  //   input: 'src/index.ts',
  //   output: [
  //     {
  //       sourcemap: true,
  //       name: 'boilerplate',
  //       file: pkg.browser,
  //       format: 'umd',
  //     },
  //   ],
  //   plugins: [
  //     ts(),
  //     json(),
  //     resolve({ extensions }),
  //     commonjs(),
  //     babel({
  //       extensions,
  //       include: ['src/**/*'],
  //     }),
  //     terser(),
  //   ],
  // },
  // {
  //   input: 'src/logger/index.ts',
  //   plugins: [
  //     ts(),
  //     json(),
  //     resolve({ extensions }),
  //     commonjs(),
  //     babel({
  //       extensions,
  //       include: ['src/**/*'],
  //     }),
  //     terser(),
  //   ],
  // },
  },
]
