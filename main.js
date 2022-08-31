

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


// creating a function calculate tip


function calculateTip(){

    let bill = parseFloat(billInput.value).toFixed(2);// variable with input data converted to decimal number

    let person = parseFloat(peopleInput.value);

    let tipAmount = (bill*(tip/100)).toFixed(2);

    let total = parseFloat(tipAmount + bill).toFixed(2);

    let tipPerPerson = (tipAmount / person).toFixed(2);

    document.getElementById('tipPerPerson').textContent = `\$${tipPerPerson}`;
    document.getElementById('tipTotal').textContent = `\$${total}`;
     




}






