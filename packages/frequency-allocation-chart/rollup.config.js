import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import dts from 'rollup-plugin-dts'
import packageJson from './package.json' assert { type: 'json' }

const config = [
  {
    input: ['src/index.ts'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
       // plugins: [scss({ fileName: './src/FrequencyBand.css' })]
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDirective: true }),
      scss({
        fileName: 'FrequencyBand.css',
        sourceMap: true,
        verbose: true
      }),
      postcss({
        extensions: ['.css']
      })
    ],
    external: ['react']
  },
  // {
  //   input: ['./dist/out-tsc/src/index.d.ts'],
  //   output: ['./dist/index.d.ts'],
  //   plugins: [dts()]
  // }
]
export default config
