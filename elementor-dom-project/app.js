const heading=document.querySelector('#heading');
const h1=document.querySelector('h1');
const align=document.querySelectorAll('.align');
const color=document.querySelector('#color');
const size=document.querySelector('.size');
const fontFamily=document.querySelector('#fontFamily');

heading.onkeyup= ()=>{
    h1.innerHTML=heading.value;
}
align.forEach(item => {
    item.onchange= ()=>{
        h1.style.textAlign=item.value;
        // h1.style.fontSize=20;
    }
});

size.oninput= ()=>{
    h1.style.fontSize=size.value +'px';
}
color.oninput= ()=>{
    h1.style.color=color.value;
}
fontFamily.onchange=()=>{
h1.style.fontFamily=fontFamily.value;
}