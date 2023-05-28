let total_amount=document.getElementById('calculate');

total_amount.addEventListener('click',()=>{
    let bill_amount=parseInt(document.getElementById('billAmount').value);
    let tipPer=parseInt(document.getElementById('tipPer').value);
    console.log(bill_amount);
    console.log(tipPer);
    let tip_amount=document.getElementById('tipAmount');
    let tip_calc=(bill_amount*tipPer)/100;
    tip_amount.innerHTML=`Tip Amount : ${tip_calc}`;
    let total_amount=document.getElementById('totalAmount');
    let total_calc=bill_amount+tip_calc;
    total_amount.innerHTML=`Total Amount is : ${total_calc}`;

})

let reset=document.getElementById('reset');
reset.addEventListener('click',()=>{
    let bill_amount=parseInt(document.getElementById('billAmount').value='');
    let tipPer=parseInt(document.getElementById('tipPer').value='');
    document.getElementById('tipAmount').innerHTML=`Tip Amount : `;
    document.getElementById('totalAmount').innerHTML=`Total Amount : `;
})