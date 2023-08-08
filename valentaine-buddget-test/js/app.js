document.getElementById('submitBudget').addEventListener('click', function () {
  //input value recieve
  let inputBudget = document.getElementById('inputBudget');
  let inputBudgetStr = inputBudget.value;
  let inputBudgetInt = parseInt(inputBudgetStr);
  
  //set value
  let showBudget = document.getElementById('showBudget');
  showBudget.innerText = inputBudgetInt;

  inputBudget.value = '';

});

//kitkat-chocolate
document.getElementById('kitkat-btn').addEventListener('click',function (){
  //get value
  let kitkatQuantity = document.getElementById('kitkat-quantity');
  let kitkatQuantityStr = kitkatQuantity.value;
  let kitkatQuantityInt = parseInt(kitkatQuantityStr);
  let totalQuantity1 = 40 * kitkatQuantityInt;
  
  let showBudget = document.getElementById('showBudget').innerText;
  let showBudgetInt = parseInt(showBudget);

  if(showBudgetInt < totalQuantity1){
    alert('please! your budget is to heigh?');
    kitkatQuantity.value = '';
    return totalQuantity1;
  }
  //set value
  let chocolate = document.getElementById('chocolate');
  chocolate.innerText = totalQuantity1;

  let total = totalQuantity1;
  
  let totalData = document.getElementById('totalData');
  if(isNaN(total)){
    return total;
  }else if(showBudgetInt < total){
    alert('please! your budget is to heigh?');
    return total;
  }else{
    totalData.innerText = total;
  }

  kitkatQuantity.value = '';
});

//rose
document.getElementById('rose-btn').addEventListener('click', function (){
  //get value
  let roseQuantity = document.getElementById('rose-quantity');
  let roseQuantityStr = roseQuantity.value;
  let roseQuantityInt = parseInt(roseQuantityStr);
  let totalQuantity1 = 10 * roseQuantityInt;

  let kitkatQuantity = document.getElementById('chocolate');
  let kitkatQuantityStr = kitkatQuantity.innerText;
  let kitkatQuantityInt = parseInt(kitkatQuantityStr);

  let showBudget = document.getElementById('showBudget').innerText;
  let showBudgetInt = parseInt(showBudget);

  if(showBudgetInt < totalQuantity1){
    alert('please! your budget is to low?');
    roseQuantity.value = '';
    return totalQuantity1;
  }

  //set value
  let rose = document.getElementById('rose');
  rose.innerText = totalQuantity1;

  let total = totalQuantity1 + kitkatQuantityInt;

  if(isNaN(total)){
    return total;
  }else if(showBudgetInt < total){
    alert('please! your budget is to heigh?');
    return total;
  }else{
    totalData.innerText = total;
  }

  roseQuantity.value = '';

});

//diary
document.getElementById('diary-btn').addEventListener('click', function() {
  //get value
  let diaryQuantity = document.getElementById('diary-quantity');
  let diaryQuantityStr = diaryQuantity.value;
  let diaryQuantityInt = parseInt(diaryQuantityStr);
  let totalQuantity1 = 60 * diaryQuantityInt;

  let showBudget = document.getElementById('showBudget').innerText;
  let showBudgetInt = parseInt(showBudget);

  if(showBudgetInt < totalQuantity1){
    alert('please! your budget is to low?');
    diaryQuantity.value = '';
    return totalQuantity1;
  }

  //set value
  let diary = document.getElementById('diary');
  diary.innerText = totalQuantity1;

  let roseQuantity = document.getElementById('rose');
  let roseQuantityStr = roseQuantity.innerText;
  let roseQuantityInt = parseInt(roseQuantityStr);

  let kitkatQuantity = document.getElementById('chocolate');
  let kitkatQuantityStr = kitkatQuantity.innerText;
  let kitkatQuantityInt = parseInt(kitkatQuantityStr);

  let total = totalQuantity1 + roseQuantityInt + kitkatQuantityInt;

  let totalData = document.getElementById('totalData');
  if(isNaN(total)){
    return total;
  }else if(showBudgetInt < total){
    alert('please! your budget is to heigh?');
    return total;
  }else{
    totalData.innerText = total;
  }

  diaryQuantity.value = '';
});

document.getElementById('discountCode').addEventListener('keyup', function (event) {
  let discountBtn = document.getElementById('discountBtn');
  let inputValue = event.target.value;
  if(inputValue === '101'){
    discountBtn.classList.remove('disabled');
    discountBtn.addEventListener('click', function () {
      let showBudget = document.getElementById('showBudget').innerText;
      let showBudgetInt = parseInt(showBudget);
      let discountAmount = document.getElementById('totalData');
      let discount = discountAmount.innerText
      let discountInt = parseInt(discount);
      let mydiscount = discountInt - (discountInt * 0.1);
      discountAmount.innerText = mydiscount;
      let allTotalCost = document.getElementById('allTotalCost');
      let totalAmount = showBudgetInt - mydiscount;
      allTotalCost.innerText = totalAmount;
    });
  }else{
    discountBtn.classList.add('disabled');
  }
})