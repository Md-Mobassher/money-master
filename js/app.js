function getInputValue (inputId){
    const inputAmount = document.getElementById(inputId);
    const inputValue = parseFloat(inputAmount.value);   
    return inputValue;
}

function getOutputValue (outputId, setValue){
    const outputAmount = document.getElementById(outputId);
    const outputValue = outputAmount.innerText;
    outputAmount.innerText = setValue;
}



document.getElementById('calculate-button').addEventListener('click', function(){
    //get input value
    const incomeAmount = getInputValue('income');
    const foodCost = getInputValue('food');
    const rentCost = getInputValue('rent');
    const clothesCost = getInputValue('clothes');

    //total cost
    const totalCost = foodCost + rentCost + clothesCost;

    //available balance
    const balance = incomeAmount - totalCost;
    console.log( balance);

    // total Expenses
    const expenses = getOutputValue('total-expenses', totalCost);
    
    // total Expenses
    const availableBalance = getOutputValue('balance', balance);
    
    
})