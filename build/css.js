// https://github.com/postcss/postcss/blob/main/docs/README-cn.md


const postcss = require('postcss')
const precss = require('precss')

const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')

const fs = require('fs')
const { resolve } = require('path')
const { configBanner } = require('./util.config')

const p = function (path) {
  return resolve(__dirname, '..', path)
}

const cssPath = p('src/rxcornor.css')
const toPath = p('dist/rxcornor.css')
const toMapPath = p('dist/rxcornor.css.map')


// console.log('\n css_head=', CSS_HEAD, '\n\n')

fs.readFile(cssPath, (err, css) => {
  if (err) {
    console.error('***** error *******\n' + err)
    return
  }
  // console.log('\ncss=', css , '\n\n')
  postcss([
    precss,
    postcssPresetEnv({ stage: 0, browsers: ['> 1%', 'last 2 versions', 'not dead'] }),
    autoprefixer
  ])
    .process(css, { from: cssPath, to: toPath })
    .then(result => {
      // console.log('result=' + result + '\n\n')
      if (!result) {
        console.log('----- error result==null -----')
        return
      }

      if (typeof result === 'object') {
        const str = result.css.replace(/[\r\n]/g, "");
        const last = configBanner + str
        // console.log('1 - last str=', last)
        fs.writeFileSync(toPath, last)
        if (result.map) fs.writeFileSync(toMapPath, result.map)
      } else {
        const str = result.replace(/[\r\n]/g, "");
        const last = configBanner + str
        // console.log('2- last str=', last)
        fs.writeFileSync(toPath, last)
      }
    })
})