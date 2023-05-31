import typescript from 'rollup-plugin-typescript2'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import scss from 'rollup-plugin-scss'
import packageJson from './package.json' assert { type: 'json' }

const env =  process.env.NODE_ENV
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json']

const config = {
  input: ['src/index.ts'],
  external: Object.keys(packageJson.peerDependencies || {}).concat('react-dom'),
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
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    nodeResolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDirective: true }),
    scss({
      fileName: 'ClassificationBanner.css',
      sourceMap: true,
      verbose: true
    }),
    postcss({
      extensions: ['.css'],
      sourceMap: true
    })
  ],
  //external: ['react']
}
export default config