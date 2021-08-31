(function () {
  const cornorSc = document.getElementById('rxcornor') || {}
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
  const src = getAttr('src') || ''

  function lookforjs(origin, string) {
    const i = origin.lastIndexOf(string)
    if (i > 0) {
      return origin.slice(0, i)
    }
    return origin
  }
  let origin = lookforjs(src, 'rxcornor.js')
  origin = lookforjs(origin, 'rxcornor.min.js')

  const div = document.createElement('div')
  div.innerHTML = `
    <a href="${link}" target="${target}" rel="noopener noreferrer" title="Follow me on ${title}" aria-describedat="rxcornor">
      <div class="rxcont ${className}">
        <div class="text">${title}</div>
      </div>
    </a>
  `
  div.className = 'rxcornor'

  if (style) div.style = style

  // head
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

  // function headAddMeta(originUrl) {
  //   const head = document.head || document.getElementsByTagName('head')[0];
  //   const meta = document.createElement('meta')
  //   meta.httpEquiv = 'Access-Control-Allow-origin'
  //   meta.content = originUrl
  //   head.appendChild(meta)
  // }

  // headAddMeta(origin)

  const dateTime = parseInt(new Date().getTime() / 108000)
  headAppendLabel(origin + 'rxcornor.css?' + dateTime)
  appendChild()

  function appendChild() {
    setTimeout(() => { // 需要在 body 渲染完才能执行
      if (document.body) {
        document.body.appendChild(div)
      } else {
        appendChild()
      }
    }, 100);
  }

  div.onmouseover = function() {
    // 进入
    div.classList.add('play')
  }

  div.onmouseout = function() {
    // 离开
    div.classList.remove('play')
  }
})();