const words=[
"Video Editor",
"Colorist",
"BGMI Esports Editor",
"Content Creator",
"DaVinci Resolve Artist"
];

let word=0;
let letter=0;
let deleting=false;

const typing=document.getElementById("typing");

function type(){

let current=words[word];

if(!deleting){

typing.innerHTML=current.substring(0,letter++);

if(letter>current.length){

deleting=true;

setTimeout(type,1200);

return;

}

}else{

typing.innerHTML=current.substring(0,letter--);

if(letter<0){

deleting=false;

word=(word+1)%words.length;

}

}

setTimeout(type,deleting?60:120);

}

type();
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll("section").forEach(sec=>{
observer.observe(sec);
});