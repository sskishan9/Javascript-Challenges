const colors=['red','green','blue','orange','purple'];
const color=document.getElementById('clr');
const btn=document.querySelector('#btn');
console.log(btn.textContent);

btn.addEventListener('click',()=>{
    const randomNumber=Math.floor(Math.random()* 5);
    console.log(randomNumber);
    color.textContent=`${colors[randomNumber]}`;
    document.body.style.backgroundColor=`${colors[randomNumber]}`;
})