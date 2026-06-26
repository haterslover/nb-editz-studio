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
window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.pageYOffset/total)*100;

document.getElementById("progress").style.width=progress+"%";

});
const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});
cursor.style.top=
window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.pageYOffset/total)*100;

document.getElementById("progress").style.width=progress+"%";

});
// Animated Counters

document.querySelectorAll(".counter").forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const speed=20;

const inc=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+inc;

setTimeout(update,40);

}else{

counter.innerText=target;

}

}

update();

});

// Theme Toggle

const theme=document.getElementById("themeToggle");

theme.onclick=()=>{

document.body.classList.toggle("light");

};