
// import resolve from 'rollup-plugin-node-resolve';
// import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser'
const path  = require('path')

const { configBanner } = require('./util.config')

export default {
  input: path.resolve(__dirname, '..', 'src/index.js'),
  output: {
    file: path.resolve(__dirname, '..', 'dist/index.js'),
    format: 'umd',  // 代码打包时的格式，这个格式可以前后端通用，除此之外还有其他格式：cjs，iife，es6，amd, umd
    name: 'RxCornor', // 如果 iife/umd 需要指定一个全局变量名
    banner: configBanner,
    plugins: [
      // resolve(),
      // babel({
      //   exclude: 'node_modules/**' // 只编译我们的源代码
      // }),
      terser(),
    ],
  },
};