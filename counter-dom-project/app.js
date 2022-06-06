const add=document.querySelector('#addMe')
const remove=document.querySelector('#removeMe')
const output=document.querySelector('#counter');
// const soundBtn=document.querySelector('#sound');
const audio1=document.querySelector('#audio1');
const audio2=document.querySelector('#audio2');
const alert=document.querySelector('#alert');

let count=0;
let resetCount='';

   add.onclick=() => {
    resetCount=setInterval(() =>{
           audio1.play();
           count++;
           output.innerHTML=count;
       },1000)
   }
   remove.onclick=() => {
      clearInterval(resetCount);
      count=0;
      output.innerHTML=count;
   }