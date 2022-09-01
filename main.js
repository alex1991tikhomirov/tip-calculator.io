window.addEventListener('load', resetMe, false)

const billInput = document.getElementById('bill');/*need to get data from the innput to a variable and add a eventlistener*/
bill.addEventListener('change', calculateTip);

const peopleInput = document.getElementById('person');/*need to get data from the input of people amount and add eventlistener*/
peopleInput.addEventListener('change', calculateTip);

const tipPercent = document.getElementsByClassName('percent');//getting percent buttons to a node list and adding an eventlistener



const button = document.getElementsByClassName('button');
const butArr = Array.from(button);
butArr.forEach((el) =>{
    el.onclick = calculateTip;
});

let tip;
const percentArr = Array.from(tipPercent);
percentArr.forEach(function(element){
    element.addEventListener('click', ()=>{
        tip = parseFloat(element.innerHTML);
        console.log(tip);
    });
});


const reset = document.getElementById('reset');
reset.addEventListener('click', resetMe, false);

function resetMe(){

    tip = parseInt(percentArr[2].innerHTML);
    
    console.log(tip);
    reset.style.backgroundColor = '#0D686D';
    reset.style.color = '#065257';
    billInput.value = '1';
    peopleInput.value = '1';
    document.getElementById('tipPerPerson').textContent = `$0.00`;
    document.getElementById('tipTotal').textContent = `$0.00`;

}

// creating a function calculate tip


function calculateTip(){

    reset.style.backgroundColor = '#26C2AD';
    
    let bill = parseFloat(billInput.value).toFixed(2);// variable with input data converted to decimal number
    let person = parseInt(peopleInput.value);
    let tipAmount = (bill*(tip/100)).toFixed(2);
    let total = parseFloat(tipAmount + bill).toFixed(2);
    let tipPerPerson = parseFloat(tipAmount / person).toFixed(2);

    document.getElementById('tipPerPerson').textContent = `\$${tipPerPerson}`;
    document.getElementById('tipTotal').textContent = `\$${total}`;
    
    }
calculateTip();
