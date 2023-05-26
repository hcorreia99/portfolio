var el = document.getElementById("main-title");
var content = el.innerHTML;
el.innerHTML="";
typewrite_content(content.trim(), el);

function typewrite_content(content, el){
    var typespeed = 200;
    el.innerHTML += content[0];
    if(content[0]==' '){
        el.innerHTML += content[1];
        content = content.slice(1);
    }
    content = content.slice(1);
    if(content.length>0)
        setTimeout(typewrite_content, typespeed, content, el);
}