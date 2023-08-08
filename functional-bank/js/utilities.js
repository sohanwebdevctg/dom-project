//newInputAmountValue
function newInputAmountValue(inputAmount){
    let newInputAmount = document.getElementById(inputAmount);
    let newInputAmountStr = newInputAmount.value;
    let newInputAmountValue = parseFloat(newInputAmountStr);

    if(isNaN(newInputAmountValue)){
        alert("please enter integer number");
    }

    newInputAmount.value = '';

    return newInputAmountValue;
}

//preElementAmountValue
function preElementAmountValue(preAmount){
    let preElementAmount = document.getElementById(preAmount);
    let preElementAmountStr = preElementAmount.innerText;
    let preElementAmountValue = parseFloat(preElementAmountStr);
    return preElementAmountValue;
}

//amount
function totalAmounts(amountId, amountValue){
    let totalAmount = document.getElementById(amountId);
    totalAmount.innerText = amountValue;
}