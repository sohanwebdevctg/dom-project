document.getElementById('WithdrawBtn').addEventListener('click', function(){
  //newWithdraw
  const newWithdraw = document.getElementById('newWithdraw');
  const strNewWithdraw = newWithdraw.value;
  const intNewWithdraw = parseFloat(strNewWithdraw);

  

  //preWithdraw
  const preWithdraw = document.getElementById('preWithdraw');
  const strPreWithdraw = preWithdraw.innerText;
  const intPreWithdraw = parseFloat(strPreWithdraw);

  
  

  //total
  const total = document.getElementById('total');
  const strTotal = total.innerText;
  const intTotal = parseFloat(strTotal);

  
  if(intNewWithdraw > intTotal){
    alert('your amount is very heigh');
    newWithdraw.value = '';
    return;
  }
  

  if(isNaN(intNewWithdraw)){
    alert('please enter amount number');
    newWithdraw.value = '';
    return;
  }

  const totalWithdraw = intNewWithdraw + intPreWithdraw;
  preWithdraw.innerText = totalWithdraw;


  const totalAmount = intTotal - intNewWithdraw;
  total.innerText = totalAmount;

  newWithdraw.value = '';
})