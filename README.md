# RxCornor

在 html 中 引入 script 标签，并配置相应的属性，，网站右上角 就会有 快捷角标

# 一、 html Usage

```html
<script src="https://cdn.jsdelivr.net/npm/rxcornor@0.0.8/dist/rxcornor.min.js"
  id="rxcornor"
  link="https://github.com/cheere/rxcornor">
</script>
```

or (或者)

```html
<script src="https://cdn.jsdelivr.net/npm/rxcornor@0.0.8/dist/rxcornor.min.js"
  id="rxcornor"
  link="https://gitee.com/cheere/rxcornor"
  target="_blank"
  title="GitHub"
  className="a b"
></script>
```

<br>

# 二、node Usage
```sh
npm i -D rxcornor
```

```js
import RxCornor from 'rxcornor'
import 'rxcornor/dist/rxcornor.css'

  // 1  config
  const rxcornorConfig = {
    // title: 'GitHub-rx', // default: Github  - <string>
    // target: '',  // default: _blank,     can set: '_blank' / '_self' / ...
    // className: '',  // default: '',      can set: 'a b'
    // style: '',  // default: null - <string>
    link: 'https://github.com/cheere/rxcornor'
  }
  const c = new RxCornor()
  c.setConfig(rxcornorConfig)

  // single config
  c.title = 'again-srxboys' // not support

  // RxCornor version
  console.log(c.version) // '0.0.8'


  // get value = String
  const template = c.getTemplate()
  /*
    `<div>
      <a> ... </a>
     </div>`
  */


  // do animal - default - (classList add "play")
  c.addNomalAnimal()
  c.addNomalAnimal('shank-play')
  c.addNomalAnimal('run')
```

<br>

# 三、API
## id
Unique identification(唯一标识) &nbsp;  `rxcornor`<br>
Yes and only one (有且只有一个)。

## link
url/href (点击跳转的链接)

## target : a 标签的 跳转方式
_blank 、 _self 、 _parent 、 _top 、 `framename`

## title : 角标上显示的文本


## className ： 可以自定义添加 className
自定义 样式的 class

## style ：自定义样式

<br>

# License
[MIT](https://github.com/cheere/rxcornor/blob/main/LICENSE)