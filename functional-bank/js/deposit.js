document.getElementById("depositBtn").addEventListener("click", function () {
    //newDepositAmount
    let newDepositAmount = newInputAmountValue("newDepositAmount");

    //preDepositAmount
    let preDepositAmount = preElementAmountValue("preDepositAmount");

    //totalDepositAmount
    let totalDepositAmount = preDepositAmount + newDepositAmount;

    totalAmounts("preDepositAmount", totalDepositAmount);

    //preTotalAmount
    let preTotalAmount = preElementAmountValue("preTotalAmount");

    //totalAmount
    let totalAmount = preTotalAmount + newDepositAmount;

    totalAmounts("preTotalAmount", totalAmount);



    
})