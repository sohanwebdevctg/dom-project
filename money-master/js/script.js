//calculate(total expense & balance)
document.getElementById("calculate-btn").addEventListener("click", function () {
  //income
    let income = document.getElementById("income");
    let incomeStr = income.value;
    let incomeStrInt = parseInt(incomeStr);
    
  //expenses-food
    let food = document.getElementById("food");
    let foodStr = food.value;
    let foodStrInt = parseInt(foodStr);

  //expenses-rent
    let rent = document.getElementById("rent");
    let rentStr = rent.value;
    let rentStrInt = parseInt(rentStr);

  //expenses-clothes
    let clothes = document.getElementById("clothes");
    let clothesStr = clothes.value;
    let clothesStrInt = parseInt(clothesStr);

    //total expense show
    let totalExpenses = document.getElementById("total-expense");
    let balance = document.getElementById("balance");

    //total expense amount
    let totalExpenseAmount = foodStrInt + rentStrInt + clothesStrInt;
    totalExpenses.innerText = totalExpenseAmount;

    let totalBalance = incomeStrInt - totalExpenseAmount;
    balance.innerText = totalBalance;


});

document.getElementById("saveBtn").addEventListener("click", function () {


  //income
  let income = document.getElementById("income");
  let incomeStr = income.value;
  let incomeStrInt = parseInt(incomeStr);
  
//expenses-food
  let food = document.getElementById("food");
  let foodStr = food.value;
  let foodStrInt = parseInt(foodStr);

//expenses-rent
  let rent = document.getElementById("rent");
  let rentStr = rent.value;
  let rentStrInt = parseInt(rentStr);

//expenses-clothes
  let clothes = document.getElementById("clothes");
  let clothesStr = clothes.value;
  let clothesStrInt = parseInt(clothesStr);

  //total expense show
  let totalExpenses = document.getElementById("total-expense");
  let balance = document.getElementById("balance");

  //total expense amount
  let totalExpenseAmount = foodStrInt + rentStrInt + clothesStrInt;

  let totalBalance = incomeStrInt - totalExpenseAmount;

  //let save
  let save = document.getElementById("save");
  let saveStr = save.value;
  let saveStrTax = (saveStr * 100);
  let saveStrInt = parseInt(saveStrTax);

  let totalSavingAmount = incomeStrInt + saveStrInt;
  let totalSaving = totalSavingAmount - incomeStrInt;
  
  
  //savingAmount
  let savingAmount = document.getElementById("saving-amount");
  savingAmount.innerText = totalSaving;

  let remainingBalance = document.getElementById("remaining-balance");

  let totalFullSave = totalBalance - totalSaving;

  remainingBalance.innerText = totalFullSave;


})
