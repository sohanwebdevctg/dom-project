let counter = 0;

document.getElementById('first-btn').addEventListener('click', function (){
  counter += 1;
  let firstPrice = document.getElementById('first-price');
  let firstPriceStr = firstPrice.innerText;
  let firstPriceInt = parseInt(firstPriceStr);
  
  let firstQuantity = document.getElementById('first-quantity');
  let firstQuantityStr = firstQuantity.innerText;
  let firstQuantityInt = parseInt(firstQuantityStr);

  let total = firstPriceInt * firstQuantityInt;
  document.getElementById('first-btn').setAttribute('disabled', true);

  let container = document.getElementById('table-container');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th>${counter}</th>
  <td>Coffe Js</td>
  <td>${firstPriceInt}</td>
  <td>${firstQuantityInt}</td>
  <td>${total}</td>
  <td><button class='bg-red-600 p-2 rounded text-slate-50' id='deleteBtn1'>Delete</button></td>
  `;
  container.appendChild(tr);
  let deleteBtn = document.getElementById('deleteBtn1');
  deleteBtn.addEventListener('click', function (event){
  let btn = event.target.parentNode.parentNode;
  btn.style.display = 'none';
  });
});

document.getElementById('second-btn').addEventListener('click', function (){
  counter += 1;
  let secondPrice = document.getElementById('second-price');
  let secondPriceStr = secondPrice.innerText;
  let secondPriceInt = parseInt(secondPriceStr);
  
  let secondQuantity = document.getElementById('second-quantity');
  let secondQuantityStr = secondQuantity.innerText;
  let secondQuantityInt = parseInt(secondQuantityStr);

  let total = secondPriceInt * secondQuantityInt;

  document.getElementById('second-btn').setAttribute('disabled', true);

  let container = document.getElementById('table-container');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th>${counter}</th>
  <td>Heart Js</td>
  <td>${secondPriceInt}</td>
  <td>${secondQuantityInt}</td>
  <td>${total}</td>
  <td><button class='bg-red-600 p-2 rounded text-slate-50' id='deleteBtn2'>Delete</button></td>
  `;
  container.appendChild(tr);
  let deleteBtn = document.getElementById('deleteBtn2');
  deleteBtn.addEventListener('click', function (event){
  let btn = event.target.parentNode.parentNode;
  btn.style.display = 'none';
  });
});

document.getElementById('third-btn').addEventListener('click', function (){
  counter += 1;
  let thirdPrice = document.getElementById('third-price');
  let thirdPriceStr = thirdPrice.innerText;
  let thirdPriceInt = parseInt(thirdPriceStr);
  
  let thirdQuantity = document.getElementById('third-quantity');
  let thirdQuantityStr = thirdQuantity.innerText;
  let thirdQuantityInt = parseInt(thirdQuantityStr);

  let total = thirdPriceInt * thirdQuantityInt;

  document.getElementById('third-btn').setAttribute('disabled', true);

  let container = document.getElementById('table-container');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th>${counter}</th>
  <td>Panda Js</td>
  <td>${thirdPriceInt}</td>
  <td>${thirdQuantityInt}</td>
  <td>${total}</td>
  <td><button class='bg-red-600 p-2 rounded text-slate-50' id='deleteBtn3'>Delete</button></td>
  `;
  container.appendChild(tr);
  let deleteBtn = document.getElementById('deleteBtn3');
  deleteBtn.addEventListener('click', function (event){
  let btn = event.target.parentNode.parentNode;
  btn.style.display = 'none';
  });
});

document.getElementById('fourth-btn').addEventListener('click', function (){
  counter += 1;
  let fourthPrice = document.getElementById('fourth-price');
  let fourthPriceStr = fourthPrice.innerText;
  let fourthPriceInt = parseInt(fourthPriceStr);
  
  let fourthQuantity = document.getElementById('fourth-quantity');
  let fourthQuantityStr = fourthQuantity.innerText;
  let fourthQuantityInt = parseInt(fourthQuantityStr);

  let total = fourthPriceInt * fourthQuantityInt;

  document.getElementById('fourth-btn').setAttribute('disabled', true);

  let container = document.getElementById('table-container');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th>${counter}</th>
  <td>Umbrella Js</td>
  <td>${fourthPriceInt}</td>
  <td>${fourthQuantityInt}</td>
  <td>${total}</td>
  <td><button class='bg-red-600 p-2 rounded text-slate-50' id='deleteBtn4'>Delete</button></td>
  `;
  container.appendChild(tr);
  let deleteBtn = document.getElementById('deleteBtn4');
  deleteBtn.addEventListener('click', function (event){
  let btn = event.target.parentNode.parentNode;
  btn.style.display = 'none';
  });
});

document.getElementById('fifth-btn').addEventListener('click', function (){
  counter += 1;
  let fifthPrice = document.getElementById('fifth-price');
  let fifthPriceStr = fifthPrice.innerText;
  let fifthPriceInt = parseInt(fifthPriceStr);
  
  let fifthQuantity = document.getElementById('fifth-quantity');
  let fifthQuantityStr = fifthQuantity.innerText;
  let fifthQuantityInt = parseInt(fifthQuantityStr);

  let total = fifthPriceInt * fifthQuantityInt;

  document.getElementById('fifth-btn').setAttribute('disabled', true);

  let container = document.getElementById('table-container');
  let tr = document.createElement('tr');
  tr.innerHTML = `
  <th>${counter}</th>
  <td>Vue Js</td>
  <td>${fifthPriceInt}</td>
  <td>${fifthQuantityInt}</td>
  <td>${total}</td>
  <td><button class='bg-red-600 p-2 rounded text-slate-50' id='deleteBtn5'>Delete</button></td>
  `;
  container.appendChild(tr);
  let deleteBtn = document.getElementById('deleteBtn5');
  deleteBtn.addEventListener('click', function (event){
  let btn = event.target.parentNode.parentNode;
  btn.style.display = 'none';
  });
});

