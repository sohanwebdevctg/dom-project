document.getElementById("withdrawBtn").addEventListener("click", function () {
    //newWithdrawAmount
    let newWithdrawAmount = newInputAmountValue("newWithdrawAmount");

    //preWithdrawAmount
    let preWithdrawAmount = preElementAmountValue("preWithdrawAmount");

    //preTotalAmount
    let preTotalAmount = preElementAmountValue("preTotalAmount");

    if(preTotalAmount <  newWithdrawAmount){
        alert("you have no money");
        return;
    }

    //totalWithdrawAmount
    let totalWithdrawAmount = preWithdrawAmount + newWithdrawAmount;

    totalAmounts("preWithdrawAmount", totalWithdrawAmount);

    //totalAmount
    let totalAmount = preTotalAmount - newWithdrawAmount;

    totalAmounts("preTotalAmount", totalAmount);

    

})