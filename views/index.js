var fs=require('fs');
var include=(path)=>{
    var exports = undefined;
    (1,eval)(fs.readFileSync(__dirname+path, 'UTF-8'));
};
var link=(path)=>{
    var elem=document.createElement('link');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', 'file://'+__dirname+path);
    document.head.appendChild(elem);
};

window.addEventListener('load', ()=>{
    link('/css/index.css');
    setTimeout(()=>{        
        include('/js/jquery-2.2.3.min.js');
        include('/js/raphael.js');
        include('/js/dancer.min.js');
        include('/js/main.js');
    }, 100);
});