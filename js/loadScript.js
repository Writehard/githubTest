function loadScript(url) {
    if(typeof url == 'string' && url != ''){
        let script = document.createElement('script');
        script.src = url
        document.body.appendChild(script);
    }else {
        return undefined
    }
}
function loadStyle(url) {
    
}