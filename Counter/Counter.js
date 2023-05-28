let count =0;
const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn');
console.log(btns);

btns.forEach((e)=>{
    e.addEventListener('click',(el)=>{
        const styles=el.currentTarget.classList 
        if(styles.contains('decrease')){
            count--; 
        }
        else if(styles.contains('reset')){
            count=0;
        }
        else {
            count++;
        }
        if(count>0){
            value.style.color='green';
        }
        else if(count<0){
            value.style.color='red';
        }
        else{
            value.style.color='black';
        }
        value.textContent=count;
        
    })
})