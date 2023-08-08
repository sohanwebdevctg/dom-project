document.getElementById("tripleBtn").addEventListener("click", function () {
    //newInputAmount
    let getNewInputAmount = getInputAmountValue("newTripleValue");

    //preElementAmount
    let getPreElementAmount = getElementAmountValue("preTripleValue");

    //totalAmount
    let totalTripleValue = (getNewInputAmount * 3 ) + getPreElementAmount;

    totalAmount("preTripleValue", totalTripleValue);
});