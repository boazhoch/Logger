import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
// import babel from '@rollup/plugin-babel'
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

  const config =  [
    {
      input: 'src/index.ts',
      // external: [
      //   ...Object.keys(pkg.dependencies as unknown as any || {}),
      //   ...Object.keys(pkg.peerDependencies as any || {}),
      // ],
      output: [
        {
          sourcemap: isDev,
          file: pkg.main,
          format: 'cjs',
        },
      ],
      plugins: [
        ts(),
        resolve({ extensions }),
        commonjs(),
        terser(),
        ...devPlugins(),
      ],
    },
    {
      input: 'src/index.ts',
      // external: [
      //   ...Object.keys(pkg.dependencies as unknown as any || {}),
      //   ...Object.keys(pkg.peerDependencies as any || {}),
      // ],
      output: {
        sourcemap: isDev,
          dir: 'dist',
          format: 'esm',
      },
      plugins: [
        ts(),
        // resolve({ extensions }),
        // commonjs(),
        terser(),
        ...devPlugins(),
      ],
    },
    {
      input: 'src/index.ts',
      output: {
        sourcemap: isDev,
          file: pkg.module,
          format: 'esm',
      },
      plugins: [
        ts({ tsconfig: './tsconfig.es6.json' }),
        terser(),
        ...devPlugins(),
      ],
    },
  ]
  

export default config