document.getElementById("doubleBtn").addEventListener("click", function () {
    //newInputAmount
    let getNewInputAmount = getInputAmountValue("newDoubleValue");

    //preElementAmount
    let getPreElementAmount = getElementAmountValue("preDoubleValue");

    //totalAmount
    let totalDoubleValue = getPreElementAmount + ( 2 * getNewInputAmount);

    totalAmount("preDoubleValue", totalDoubleValue);
});