
const btns=document.querySelectorAll('.btns');
btns.forEach((e)=>{
    e.addEventListener('click',(el)=>{
        const classes=el.currentTarget.classList;
        if(classes.contains('btn-add')){
            let input1=parseInt(document.getElementById('input1').value);
            let input2=parseInt(document.getElementById('input2').value);
            let output=input1+input2;
            document.getElementById('output').textContent=output;
        } 
        else if(classes.contains('btn-sub')){
            let input1=parseInt(document.getElementById('input1').value);
            let input2=parseInt(document.getElementById('input2').value);
            let output=input1-input2;
            document.getElementById('output').textContent=output;
        }
        else if(classes.contains('btn-mul')){
            let input1=parseInt(document.getElementById('input1').value);
            let input2=parseInt(document.getElementById('input2').value);
            let output=input1*input2;
            document.getElementById('output').textContent=output;
        }
        else if(classes.contains('btn-div')){
            let input1=parseInt(document.getElementById('input1').value);
            let input2=parseInt(document.getElementById('input2').value);
            let output=input1/input2;
            document.getElementById('output').textContent=output;
        }
        else if(classes.contains('btn-reset')){
            let input1=parseInt((document.getElementById('input1').value=''));
            let input2=parseInt((document.getElementById('input2').value=''));
            document.getElementById('output').textContent=00;
        }

    })
})
