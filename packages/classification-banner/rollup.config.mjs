import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import packageJson from './package.json' assert { type: 'json' }

const config = {
  input: ['src/index.tsx'],
  output: [
    {
      file: packageJson.main,
      format: 'umd',
      name: 'ClassificationBanner',
      exports: 'named',
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDirective: true }),
    scss({
      fileName: 'ClassificationBanner.css',
      sourceMap: true,
      verbose: true
    }),
    postcss({
      extensions: ['.css']
    })
  ],
  external: ['react']
}
export default config