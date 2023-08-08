document.getElementById('blue-btn').addEventListener('click', function(){
  let text = document.getElementById('text');
  text.innerText = "this is primary color";
  text.style.color = "white";
  document.body.style.backgroundColor = "blue";
});

document.getElementById('gray-btn').addEventListener('click', function(){
  let text = document.getElementById('text');
  text.innerText = "this is gray color";
  text.style.color = "white";
  document.body.style.backgroundColor = "gray";
});

document.getElementById('green-btn').addEventListener('click', function(){
  let text = document.getElementById('text');
  text.innerText = "this is green color";
  text.style.color = "white";
  document.body.style.backgroundColor = "green";
});