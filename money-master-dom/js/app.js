document.getElementById('calculateBtn').addEventListener('click', function(){
  //income
  const income = document.getElementById('income');
  const incomeStr = income.value;
  if(isNaN(incomeStr)){
    alert('please enter your income amount');
    income.value = '';
  }
  const incomeInt = parseFloat(incomeStr);

  //food
  const food = document.getElementById('food');
  const foodStr = food.value;
  if(isNaN(foodStr)){
    alert('please enter your food amount')
    food.value = '';
  }
  const foodInt = parseFloat(foodStr);

  //rent
  const rent = document.getElementById('rent');
  const rentStr = rent.value;
  if(isNaN(rentStr)){
    alert('please enter your rent amount');
    rent.value = '';
  }
  const rentInt = parseFloat(rentStr);

  //clothes
  const clothes = document.getElementById('clothes');
  const clothesStr = clothes.value;
  if(isNaN(clothesStr)){
    alert('please enter your clothes amount');
    clothes.value = '';
  }
  const clothesInt = parseFloat(clothesStr);

  //totalExpense
  const expense = foodInt + rentInt + clothesInt;

  if(incomeInt < expense){
    alert('sorry!your balance is to poor');
    return;
  }else{
    var balance = incomeInt - expense;
  }

 
  const totalExpense = document.getElementById('totalExpense');
  if(isNaN(expense)){
    return expense;
  }else{
    totalExpense.innerText = expense;
  }

  const totalBalance = document.getElementById('balance');
  if(isNaN(balance)){
    return balance;
  }else{
    totalBalance.innerText = balance;
  }

});

document.getElementById('savIng').addEventListener('click', function(){

  //percent
  const percent = document.getElementById('percent');
  const percentValueStr = percent.value;
  if(isNaN(percentValueStr)){
    alert('please enter integerNumber');
    percent.value = '';
  }
  const percentValueInt = parseFloat(percentValueStr);
  const percentResult = percentValueInt / 100;

  //income
  const income = document.getElementById('income');
  const incomeStr = income.value;
  const incomeInt = parseFloat(incomeStr);

  //totalpercent
  const incomeValue = incomeInt * percentResult;

  //balance
  const balance = document.getElementById('balance');
  const balanceAmount = balance.innerText;
  const balanceTotal = parseFloat(balanceAmount)
  
  //savingAmount
  const savingAmount = document.getElementById('savingAmount');
  if(balanceTotal < incomeValue){
    alert('no money');
    return percent;
  }else{
    savingAmount.innerText = incomeValue;
  }

  const totalRemaining = balanceTotal - incomeValue;

  //remainingBalance
  const remaining = document.getElementById('remainingBalance');
    remaining.innerText = totalRemaining;

  percent.value = '';
  
})