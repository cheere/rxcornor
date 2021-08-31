# RxCornor

在 html 中 引入 script 标签，并配置相应的属性，，网站右上角 就会有 快捷角标

```html
<script src="https://cdn.jsdelivr.net/npm/rxcornor@0.0.6/dist/rxcornor.min.js" id="rxcornor" link="https://github.com/cheere/rxcornor"></script>
```

or (或者)

```html
<script src="https://cdn.jsdelivr.net/npm/rxcornor@0.0.4/dist/rxcornor.min.js"
  id="rxcornor"
  link="https://gitee.com/cheere/rxcornor"
  target="_blank"
  title="GitHub"
  className="a b"
></script>
```

## 属性
### id : 唯一标识
`必须有 rxcornor` 且 只有一个

### link ：点击跳转的链接

### target : a 标签的 跳转方式
_blank 、 _self 、 _parent 、 _top 、 `framename`

### title : 角标上显示的文本


### className ： 可以自定义添加 className
自定义 样式的 class

### style ：自定义样式

