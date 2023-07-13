        // 封装js模块

// function myModule() {
//     let name = 'evanZhe'
//     function doSomething(){
//         console.log('doSomething---------' + name.toUpperCase());
//     }
//     function doOtherthing(){
//         console.log('doOtherthing--------' + name.toLowerCase());
//     }
//     return {
//         doSomething,
//         doOtherthing
//     }
// }
    (function () {
        var msg = 'brave rabbit';
        function doSomething() {
            console.log('doSomething-----' + msg.toUpperCase());
        }
        function doOtherthing() {
            console.log('doOtherthing----' + msg.toLowerCase());
        }
        window.myModule =  {
            doSomething,
            doOtherthing
        }
    })();