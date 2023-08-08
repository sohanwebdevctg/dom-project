function getInputAmountValue(inputAmount){
    //newInputAmount
    let newInputAmount = document.getElementById(inputAmount);
    let newInputAmountStr = newInputAmount.value;
    let newInputAmountValue = parseFloat(newInputAmountStr);
    
    if(isNaN(newInputAmountValue)){
        alert("please inter integer number");
    }
    
    newInputAmount.value = '';
    
    return newInputAmountValue;

}

function getElementAmountValue(elementAmount){
    //preElementAmount
    let preElementAmount = document.getElementById(elementAmount);
    let preElementAmountStr = preElementAmount.innerText;
    let preElementAmountValue = parseFloat(preElementAmountStr);
    return preElementAmountValue;
}

function totalAmount(amountId, amountValue){
    let totalAmounts = document.getElementById(amountId);
    totalAmounts.innerText = amountValue;
}