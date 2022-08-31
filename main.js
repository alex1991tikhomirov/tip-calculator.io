window.addEventListener('load', resetMe, false);

const billInput = document.getElementById('bill');/*need to get data from the innput to a variable and add a eventlistener*/
bill.addEventListener('change', calculateTip);

const peopleInput = document.getElementById('person');/*need to get data from the input of people amount and add eventlistener*/
peopleInput.addEventListener('change', calculateTip);

const tipPercent = document.getElementsByClassName('percent');//getting percent buttons to a node list and adding an eventlistener

let tip;

const button = document.getElementsByClassName('button');
const butArr = Array.from(button);
butArr.forEach((el) =>{
    el.onclick = calculateTip;
})

const percentArr = Array.from(tipPercent);
percentArr.forEach(function(element){
    element.addEventListener('click', ()=>{
        tip = parseInt(element.innerHTML);
        console.log(tip);
    });
})


const reset = document.getElementById('reset');
reset.addEventListener('click', resetMe, [false]);

function resetMe(){

    
    reset.style.backgroundColor = '#0D686D';
    reset.style.color = '#065257';
    billInput.value = '';
    peopleInput.value = '';
    document.getElementById('tipPerPerson').textContent = `$0.00`;
    document.getElementById('tipTotal').textContent = `$0.00`;

}

// creating a function calculate tip


function calculateTip(){

    reset.style.backgroundColor = '#26C2AD';
    
    let bill = parseFloat(billInput.value).toFixed(2);// variable with input data converted to decimal number
    
    let person = parseFloat(peopleInput.value);

    let tipAmount = (bill*(tip/100)).toFixed(2);

    let total = parseFloat(tipAmount + bill).toFixed(2);

    let tipPerPerson = parseFloat(tipAmount / person).toFixed(2);
    
    let outcomeTip = document.getElementById('tipPerPerson').textContent = `\$${tipPerPerson}`;

    let outcomeTotal = document.getElementById('tipTotal').textContent = `\$${total}`;
    
    
}
calculateTip();





