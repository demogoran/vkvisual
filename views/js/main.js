jQuery('<div>').attr('id', 'output').insertBefore('#au_search_items');
var p=document.querySelector('#output');
var {offsetWidth: w, offsetHeight: h}=p;
var prev;
var time=10;
var mid=h/2;  
var step=10;
var chunks=w/step;
var baseArr=[];
var median=0;
var prevtime=0;
var r = Raphael("output", w, h);



var genPath = (x,isClosing=true)=>{
    var t=[];
    x.forEach((y)=>t.push(...[...y, ' ']));  
    return t.join(' ')+(isClosing?"z":"");
};

var anim, pathq;
var genRand=()=>{  
    var arr=[
        ['M', 0, mid]
    ];
    var baseW = 0;   
    var i=0;
    while(baseW<w)
        arr.push(['L', baseW+=step, baseArr[i++]]);       
    arr.push(['L', w, mid]);
    arr.push(['L', w, h]);
    arr.push(['L', 0, h]);
    
    pathq=genPath(arr, false);
    delete arr;
    
    if(!prev){
        prev=r.path(pathq).attr({
            //stroke: 'grey', 
            fill: 'grey'
        });
    }  
    
    /*if(!anim)
        anim = Raphael.animation({path: path}, time, "<>");
    anim.anim[Object.keys(anim.anim)[0]].path=path;*/
    //prev.animate(anim);
    prev.attr('path', pathq);
};



var dancer = new Dancer();
window.dancer=dancer;
dancer.bind('update', function(){
    var d=Date.now();
    if(d-prevtime>time)
        prevtime=d;
    else
        return;
        
    baseArr=[];     
    var waveForm=Array.from(this.getWaveform());
    var chunkLength=waveForm.length/chunks;
    while(waveForm.length>0)
        baseArr.push((waveForm.splice(0, chunkLength).reduce((a,b)=>a+b)/chunkLength)/((dancer.audio&&(dancer.audio.volume>0))?dancer.audio.volume:1)*h/2+h/2);    
    requestAnimationFrame(genRand);
});