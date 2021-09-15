let isNode = false
const domString = 'rxcornor'

function RxCornor() {
  if (!(this instanceof RxCornor)) {
    console.warn('RxCornor is a constructor and should be called with `new` keyword');
  }
}

_init()

function _init() {
  const d = document
  if (!d) {
    setTimeout(() => {
      _init()
    }, 10);
    return
  }

  // console.log('_init - domString=', domString)
  const cornorSc = document.getElementById(domString)
  if (cornorSc) {
    _htmlLoad(cornorSc)
  } else {
    isNode = true
    const options = {}
    setConfig(options)
  }

  __setObjDefine(RxCornor.prototype, 'isNode', isNode)
}

function _htmlLoad(cornorSc) {
  const attributes = cornorSc.attributes || {}

  // script 自定义属性: link target
  const getAttr = function (key = '') {
    const att = attributes[key] || {}
    const attValue = att.value || ''
    return attValue
  }

  const link = getAttr('link')
  const target = getAttr('target') || '_blank'
  const title = getAttr('title') || 'GitHub'
  const className = getAttr('className') || ''
  const style = getAttr('style') || null
  const config = { link, target, title, className, style }
  setConfig(config)
  const src = getAttr('src') || ''

  function lookforjs(origin, string) {
    const i = origin.lastIndexOf(string)
    if (i > 0) {
      return origin.slice(0, i)
    }
    return origin
  }
  let origin = lookforjs(src, domString + '.js')
  origin = lookforjs(origin, domString + '.min.js')
  origin = lookforjs(origin, 'index.js')
  origin = lookforjs(origin, 'index.min.js')
  // console.log('origin=', origin)

  const div = document.createElement('div')
  div.innerHTML = getTemplate()
  // div.innerHTML = `
  //   <a href="${link}" target="${target}" rel="noopener noreferrer" title="Follow me on ${title}" aria-describedat="rxcornor">
  //     <div class="rxcont ${className}">
  //       <div class="text">${title}</div>
  //     </div>
  //   </a>
  // `
  div.className = domString

  if (style) div.style = style


  const dateTime = parseInt(new Date().getTime() / 108000)
  headAppendLabel(origin + domString + '.css?' + dateTime)
  __appendChild(div)
  div.onmouseover = function () {
    // 进入
    div.classList.add('play')
  }

  div.onmouseout = function () {
    // 离开
    div.classList.remove('play')
  }
}

function __appendChild(div) {
  setTimeout(() => { // 需要在 body 渲染完才能执行
    if (document.body) {
      document.body.appendChild(div)
    } else {
      __appendChild(div)
    }
  }, 100);
}

function __setObjDefine(key, value, options) {
  let newValue
  if (options && typeof options === 'object') {
    newValue = options[key]
    newValue = newValue || value
  }
  // console.log('__setObjDefine -> key =', key, ' value=', value, 'newValue=', newValue)
  const config = {
    value: newValue,
    writable: true,
    enumerable: true,
    configurable: false,
  }
  Object.defineProperty(RxCornor.prototype, key, config)
}

// function __setObjDefineConfig(config) {
//   for (const key in config) {
//     const value = config[key]
//     __setObjDefine(key, value, config)
//   }
// }

function getAllOwnProperty() {
  const config = {}
  const safeKeys = ['link', 'target', 'title', 'className', 'style']
  const keyValues = Object.entries(RxCornor.prototype)
  for (let i = 0; i < keyValues.length; i++) {
    const ownkv = keyValues[i]
    const key = ownkv[0] || ''
    const value = ownkv[1] || ''
    if (safeKeys.indexOf(key) !== -1) {
      config[key] = value
    }
  }
  return config
}

function headAppendLabel(src) {
  const head = document.head || document.getElementsByTagName('head')[0];
  if (src.indexOf(".css") > 0) { // css
    const link = document.createElement('link');
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", src);
    head.appendChild(link);
  } else {
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.setAttribute("src", src);
    head.appendChild(script);
  }
}

function getTemplate() {
  const options = getAllOwnProperty()
  if (!options) {
    return `<div data-set-tip="getTemplate-fn error"></div>`
  }
  const link = options.link || ''
  const target = options.target || ''
  const title = options.title || ''
  const className = options.className || ''
  // console.log('options=', options)
  const div = `
    <a href="${link}" target="${target}" rel="noopener noreferrer" title="Follow me on ${title}" aria-describedat="rxcornor">
      <div class="rxcont ${className}">
        <div class="text">${title}</div>
      </div>
    </a>
  `
  if (isNode) {
    return `<div class="rxcornor">${div}</div>`
  }
  return div
}

function setConfig(options) {
  // console.log('setConfig -> options =', options)
  __setObjDefine('title', 'GitHub', options)
  __setObjDefine('link', '', options)
  __setObjDefine('target', '_blank', options)
  __setObjDefine('className', '', options)
  __setObjDefine('style', null, options)
}

function addNomalAnimal() {
  const d = document
  if (!d) {
    setTimeout(() => {
      addNomalAnimal()
    }, 10);
    return
  }

  const divClass = d.getElementsByClassName(domString)
  for (let i = 0; i < divClass.length; i++) {
    const div = divClass[i] || {}
    if (div && div.nodeName && div.nodeName === 'DIV') {
      div.onmouseover = function () {
        // 进入
        div.classList.add('play')
      }
      div.onmouseout = function () {
        // 离开
        div.classList.remove('play')
      }
    }
  }
}

RxCornor.prototype.version = '__VERSION__'
RxCornor.prototype.headAppendLabel = headAppendLabel
RxCornor.prototype.getTemplate = getTemplate
RxCornor.prototype.setConfig = setConfig
RxCornor.prototype.addNomalAnimal = addNomalAnimal
export default RxCornor