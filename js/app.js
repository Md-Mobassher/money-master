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
 const errorMessage = document.getElementById('message');

 function getTotalCost(){
    debugger;
    const foodCost = getInputValue('food');
    const rentCost = getInputValue('rent');
    const clothesCost = getInputValue('clothes');

    if(isNaN(foodCost) == true){
        errorMessage.innerText = "Please enter a Number";
        return;
    }
    else if(isNaN(rentCost) == true){
        errorMessage.innerText = "Please enter a Number";
        return;
    }
    else if(isNaN(clothesCost) == true){
        errorMessage.innerText = "Please enter a Number";
        return;
    }
    else if(foodCost < 0){
        errorMessage.innerText = "Please enter a Positive Number"
        return;
    }
    else if(rentCost < 0){
        errorMessage.innerText = "Please enter a Positive Number"
        return;
    }
    else if(clothesCost < 0){
        errorMessage.innerText = "Please enter a Positive Number"
        return;
    }
    else{
        errorMessage.innerText = "";
        const totalCosts = foodCost + rentCost + clothesCost;
        return totalCosts;
    }
 }

 

    // calculate button 

document.getElementById('calculate-button').addEventListener('click', function(){  
    
    const incomeAmount = getInputValue('income');
    const totalCost = getTotalCost();

    if(isNaN(incomeAmount) == true){
        errorMessage.innerText = "Please enter a Number";
        return;
    }
    else if(incomeAmount < 0){
        errorMessage.innerText = "Please enter a Positive Number"
        return;
    }
    else if(isNaN(totalCost) == true){
        errorMessage.innerText = "Please enter a Number";
        return;
    }
    else if(totalCost > incomeAmount){
        errorMessage.innerText = "You have not much money to expense";
        return;
    }
    else{
        errorMessage.innerText = '';
        //available balance
    const balance = incomeAmount - totalCost;

    // set Expenses 
    const totalExpenses = getOutputValue('total-expenses', totalCost);
    
    // set balances
    const availableBalance = getOutputValue('balance', balance); 
    }    
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

   if(reamainingBalance < 0){
        errorMessage.innerText = "You cannot save money due to income is less than expense"
        return;
   }
   else if(isNaN(saveInput) == true){
        errorMessage.innerText = "Please enter a Number"
        return;
   }
   else{
       // set remaining balance
    getOutputValue('remaining-balance', reamainingBalance);
   }
})

