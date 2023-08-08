//casePlusBtn
document.getElementById('casePlusBtn').addEventListener('click', function(){

  const caseData = document.getElementById('caseData');
  const caseDataStr = caseData.value;
  const caseDataValue = parseFloat(caseDataStr) + 1;
  const caseDataNewValue = caseDataValue;
  caseData.value = caseDataNewValue;
  

  const caseNewPrice = document.getElementById('caseNewPrice');
  const caseNewPriceStr = caseNewPrice.value;
  const caseNewPriceValue = parseFloat(caseNewPriceStr);
  if(isNaN(caseNewPriceValue)){
    caseNewPrice.value = '';
    alert('please enter an amount');
  }
  
  const totalPrice = caseDataValue * caseNewPriceValue;

  const casePrePrice = document.getElementById('casePrePrice');
  casePrePrice.innerText = totalPrice;

  //price
  const mobileTotalPrice = document.getElementById('mobilePrePrice');
  const mobileTotalValue = mobileTotalPrice.innerText;
  const mobileTotalValueInt = parseFloat(mobileTotalValue);
  const caseTotalPrice = document.getElementById('casePrePrice');
  const caseTotalValue = caseTotalPrice.innerText;
  const caseTotalValueInt = parseFloat(caseTotalValue);

  const subTotal = mobileTotalValueInt + caseTotalValueInt;

  //subTotal
  const subTotalPrice = document.getElementById('subTotal');
  if(isNaN(subTotal)){
    return;
  }else{
    subTotalPrice.innerText = subTotal;
  }
  
  const tax = (subTotal * 0.1).toFixed(2);
  
  //tax
  const taxPrice = document.getElementById('tax');
  taxPrice.innerText = tax;

  const allTotalPrice = subTotal + tax;

  //totalPrice
  const totalAmount = document.getElementById('total');
  totalAmount.innerText = allTotalPrice;
  
});


//caseMinusBtn
document.getElementById('caseMinusBtn').addEventListener('click', function(){

  const caseData = document.getElementById('caseData');
  const caseDataStr = caseData.value;
  const caseDataValue = parseFloat(caseDataStr) - 1;
  const caseDataNewValue = caseDataValue;
  if(caseDataNewValue > 0){
    caseData.value = caseDataNewValue;
  }else{
    alert('sorry! it is a last digit')
  }

  const caseNewPrice = document.getElementById('caseNewPrice');
  const caseNewPriceStr = caseNewPrice.value;
  const caseNewPriceValue = parseFloat(caseNewPriceStr);

  if(isNaN(caseNewPriceValue)){
    caseNewPrice.value = '';
    alert('please enter an amount');
  }
  
  const totalPrice = caseDataValue * caseNewPriceValue;

  const casePrePrice = document.getElementById('casePrePrice');
  casePrePrice.innerText = totalPrice;

  //price
  const mobileTotalPrice = document.getElementById('mobilePrePrice');
  const mobileTotalValue = mobileTotalPrice.innerText;
  const mobileTotalValueInt = parseFloat(mobileTotalValue);
  const caseTotalPrice = document.getElementById('casePrePrice');
  const caseTotalValue = caseTotalPrice.innerText;
  const caseTotalValueInt = parseFloat(caseTotalValue);

  const subTotal = mobileTotalValueInt + caseTotalValueInt;

  //subTotal
  const subTotalPrice = document.getElementById('subTotal');
  if(isNaN(subTotal)){
    return;
  }else{
    subTotalPrice.innerText = subTotal;
  }

  const tax = (subTotal * 0.1).toFixed(2);
  
  //tax
  const taxPrice = document.getElementById('tax');
  taxPrice.innerText = tax;

  const allTotalPrice = subTotal + tax;

  //totalPrice
  const totalAmount = document.getElementById('total');
  totalAmount.innerText = allTotalPrice;

});

//mobilePlusBtn
document.getElementById('mobilePlusBtn').addEventListener('click', function(){

  const mobileData = document.getElementById('mobileData');
  const mobileDataStr = mobileData.value;
  const mobileDataValue = parseFloat(mobileDataStr) + 1;
  const mobileDataNewValue = mobileDataValue;
  mobileData.value = mobileDataNewValue;

  const mobileNewPrice = document.getElementById('mobileNewPrice');
  const mobileNewPriceStr = mobileNewPrice.value;
  const mobileNewPriceValue = parseFloat(mobileNewPriceStr);
  if(isNaN(mobileNewPriceValue)){
    mobileNewPrice.value = '';
    alert('please enter an amount')
  }
  
  const totalPrice = mobileDataValue * mobileNewPriceValue;

  const mobilePrePrice = document.getElementById('mobilePrePrice');
  mobilePrePrice.innerText = totalPrice;

  //price
  const mobileTotalPrice = document.getElementById('mobilePrePrice');
  const mobileTotalValue = mobileTotalPrice.innerText;
  const mobileTotalValueInt = parseFloat(mobileTotalValue);
  const caseTotalPrice = document.getElementById('casePrePrice');
  const caseTotalValue = caseTotalPrice.innerText;
  const caseTotalValueInt = parseFloat(caseTotalValue);

  const subTotal = mobileTotalValueInt + caseTotalValueInt;

  //subTotal
  const subTotalPrice = document.getElementById('subTotal');
  if(isNaN(subTotal)){
    return;
  }else{
    subTotalPrice.innerText = subTotal;
  }

  const tax = (subTotal * 0.1).toFixed(2);
  
  //tax
  const taxPrice = document.getElementById('tax');
  taxPrice.innerText = tax;

  const allTotalPrice = subTotal + tax;

  //totalPrice
  const totalAmount = document.getElementById('total');
  totalAmount.innerText = allTotalPrice;
  
});

//mobileMinusBtn
document.getElementById('mobileMinusBtn').addEventListener('click', function(){

  const mobileData = document.getElementById('mobileData');
  const mobileDataStr = mobileData.value;
  const mobileDataValue = parseFloat(mobileDataStr) - 1;
  const mobileDataNewValue = mobileDataValue;
  if(mobileDataNewValue > 0){
    mobileData.value = mobileDataNewValue;
  }else{
    alert('sorry! it is a last digit')
  }

  const mobileNewPrice = document.getElementById('mobileNewPrice');
  const mobileNewPriceStr = mobileNewPrice.value;
  const mobileNewPriceValue = parseFloat(mobileNewPriceStr);

  if(isNaN(mobileNewPriceValue)){
    mobileNewPrice.value = '';
    alert('please enter an amount')
  }
  
  const totalPrice = mobileDataValue * mobileNewPriceValue;

  const mobilePrePrice = document.getElementById('mobilePrePrice');
  mobilePrePrice.innerText = totalPrice;

  //price
  const mobileTotalPrice = document.getElementById('mobilePrePrice');
  const mobileTotalValue = mobileTotalPrice.innerText;
  const mobileTotalValueInt = parseFloat(mobileTotalValue);
  const caseTotalPrice = document.getElementById('casePrePrice');
  const caseTotalValue = caseTotalPrice.innerText;
  const caseTotalValueInt = parseFloat(caseTotalValue);

  const subTotal = mobileTotalValueInt + caseTotalValueInt;

  //subTotal
  const subTotalPrice = document.getElementById('subTotal');
  if(isNaN(subTotal)){
    return;
  }else{
    subTotalPrice.innerText = subTotal;
  }

  const tax = (subTotal * 0.1).toFixed(2);
  
  //tax
  const taxPrice = document.getElementById('tax');
  taxPrice.innerText = tax;

  const allTotalPrice = subTotal + tax;

  //totalPrice
  const totalAmount = document.getElementById('total');
  totalAmount.innerText = allTotalPrice;
  
});