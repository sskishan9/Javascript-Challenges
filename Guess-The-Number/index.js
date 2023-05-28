let random_number=Math.floor(Math.random()*100);
console.log(random_number);

let btn=document.querySelectorAll('.btn');
btn.forEach((e)=>{
    e.addEventListener('click',(el)=>{
        let result=document.getElementById('display');
        let user_number=parseInt(document.getElementById('userInput').value);
        let classes=el.currentTarget.classList;
        if(classes.contains('btn-submit'))
        {
            if(random_number==user_number)
            {
                result.innerHTML=`Congrats, You have Entered the Correct Number!`;
                result.style.backgroundColor='green';
            }
            else if(random_number>user_number)
            {
                result.innerHTML=`Sorry, The Number you have entered is less than the Actual one !`;
                result.style.backgroundColor='red';
            }
            else{
                result.innerHTML=`Sorry, The Number you have entered is Greater than the Actual one !`;
                result.style.backgroundColor='red';
            }
        }
        else if(classes.contains('btn-reset'))
        {
            window.location.reload();
        }
    })
})