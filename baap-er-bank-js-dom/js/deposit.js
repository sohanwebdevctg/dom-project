document.getElementById('depositBtn').addEventListener('click', function(){
  //newDposit
  const newDeposit = document.getElementById('newDeposit');
  const strNewDeposit = newDeposit.value;
  const intNewDeposit = parseFloat(strNewDeposit);

  //preDeposit
  const preDeposit = document.getElementById('preDeposit');
  const strPreDeposit = preDeposit.innerText;
  const intPreDeposit = parseFloat(strPreDeposit);

  //total
  const total = document.getElementById('total');
  const strTotal = total.innerText;
  const intTotal = parseFloat(strTotal);

  if(isNaN(intNewDeposit)){
    alert('please enter amount number');
    newDeposit.value = '';
    return;
  }
  
  const totalDeposit = intNewDeposit + intPreDeposit;
  preDeposit.innerText = totalDeposit;

  const totalAmount = intTotal + intNewDeposit;
  total.innerText = totalAmount;

  newDeposit.value = '';
  
})