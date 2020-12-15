import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import ts from '@wessberg/rollup-plugin-ts'
import pkg from './package.json'
import livereload from 'rollup-plugin-livereload'
import dev from 'rollup-plugin-dev'
import koaBody from 'koa-body'
import htmlTemplate from 'rollup-plugin-generate-html-template'
import process from 'process'

const isDev = process.env.BUILD === 'development'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

const devPlugins = () => isDev ? 
  [
    htmlTemplate({
      template: 'index.html',
      target: 'index.html',
    }),
    dev({dirs: ['dist'], port: 8081, extend(app, modules) { 
      app.use(koaBody({ multipart: true }))
      app.use(modules.router.post('/log', (ctx, next) => {
        console.log(ctx.request.body)
        ctx.body = {ok: true}
      }))}, 
    }),
    livereload(),
  ] : []

export default [
  {
    input: 'src/index.ts',
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    output: [
      {
        sourcemap: isDev,
        file: pkg.main,
        format: 'cjs',
      },
      {
        sourcemap: isDev,
        file: pkg.module,
        format: 'esm',
      },
    ],
    plugins: [
      ts(),
      resolve({ extensions }),
      commonjs(),
      babel({
        extensions,
        include: ['src/**/*'],
      }),
      terser(),
      ...devPlugins(),
    ],
  },
]
