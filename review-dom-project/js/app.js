document.getElementById("review-btn").addEventListener('click', function(){
  let input = document.getElementById('text');
  let inputText = input.value;
  let container = document.getElementById('commnet-container');
  let li = document.createElement('li');
  li.innerText = inputText;
  li.style.listStyleType = "none";
  container.appendChild(li);
  input.value = '';
})