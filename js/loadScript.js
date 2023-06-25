//动态脚本
function loadScript(url) {
    if(typeof url == 'string' && url != ''){
        let script = document.createElement('script');
        script.src = url
        document.body.appendChild(script);
    }else {
        return undefined
    }
}
//动态样式
function loadStyle(url) {
    let link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = url
    let head = document.getElementsByTagName('head')[0]
    head.appendChild(link) 
}