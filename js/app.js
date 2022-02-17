// input function
function getInputValue (inputId){
    const inputAmount = document.getElementById(inputId);
    const inputValue = parseFloat(inputAmount.value);   
    return inputValue;
}
// output function
function getOutputValue (outputId, setValue){
    const outputAmount = document.getElementById(outputId);
    const outputValue = outputAmount.innerText;
    outputAmount.innerText = setValue;
}

 function getTotalCost( ){
    const foodCost = getInputValue('food');
    const rentCost = getInputValue('rent');
    const clothesCost = getInputValue('clothes');
    
    const totalCosts = foodCost + rentCost + clothesCost;
    return totalCosts;
 }

    // calculate button 

document.getElementById('calculate-button').addEventListener('click', function(){  
    const incomeAmount = getInputValue('income');
    const totalCost = getTotalCost();

    //available balance
    const balance = incomeAmount - totalCost;

    // set Expenses 
    const totalExpenses = getOutputValue('total-expenses', totalCost);
    
    // set balances
    const availableBalance = getOutputValue('balance', balance);    
})


    // save button

document.getElementById('save-button').addEventListener('click', function(){  
    const incomeAmount = getInputValue('income');
    const totalCosts = getTotalCost();
    const saveInput = getInputValue('save');

    // get saving amount
    const savingAmount = incomeAmount * (saveInput / 100);

    // set savings Amount
    getOutputValue('saving-amount', savingAmount); 

    // reamaining balance 
    const reamainingBalance = incomeAmount - (totalCosts + savingAmount);

    // set remaining balance
    getOutputValue('remaining-balance', reamainingBalance);
})

