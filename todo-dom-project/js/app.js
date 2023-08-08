let counter = 0;
document.getElementById("input-btn").addEventListener('click', function (){
  counter += 1;
  let inputValue = document.getElementById('inputValue');
  let inputValeuData = inputValue.value;
  
  let container = document.getElementById('container');
  let createTr = document.createElement('tr');
  createTr.innerHTML = `
    <th scope="row">${counter}</th>
    <td>${inputValeuData}</td>
    <td><button class='btn btn-danger deleteBtn'>Delete</button></td>
  `;
  container.appendChild(createTr);

  let deleteBtn = document.querySelectorAll('.deleteBtn');
  for(let btn of deleteBtn){
    btn.addEventListener('click', function(event){
      let data = event.target.parentNode.parentNode;
      data.style.display = 'none';
    })
  }

  inputValue.value = '';

});

document.getElementById('clear-btn').addEventListener('click', function(){
  let container = document.getElementById('container');
  container.style.display = 'none';
});