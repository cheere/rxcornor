const rxcornorConfig = {
  // title: 'GitHub-rx', // default: Github  - <string>
  // target: '',  // default: _blank,     can set: '_blank' / '_self' / ...
  // className: '',  // default: '',      can set: 'a b'
  // style: '',  // default: null - <string>
  link: 'https://github.com/cheere/rxcornor'
}

// correct - init
const c = new RxCornor()

// error - init
// const c = RxCornor()
// const c = RxCornor

// console.log('c=', c)
c.setConfig(rxcornorConfig)

c.title = 'again-srxboys' // not support
const template = c.getTemplate()
// console.log('template=>\n', template, '\n\n')

const version = c.version
console.log('version=', version)

if (template) {
  // 可以不用(在 html 中导入，或者在 vue-cli/vite 的 .js 模板中 导入)
  c.headAppendLabel('../dist/rxcornor.css')

  const componCornor = Vue.extend({ template,
    data() {
      return {
        c
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.c.addNomalAnimal()

        // this.c.addNomalAnimal('aaa')
      })
    }
  })

  Vue.component('my-cornor', componCornor)

  const app = new Vue({
    el: '#app',
  })
} else {
  console.warn('template = null')
}

