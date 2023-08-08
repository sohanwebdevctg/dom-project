let count = 0;

document.getElementById('increase-btn').addEventListener('click', function(){
  count += 1;
  let counter = document.getElementById('counter');
  counter.innerText = count;
});
document.getElementById('dicrease-btn').addEventListener('click', function(){
  count -= 1;
  if(count < 0){
    alert('sorry');
    return count;
  }
  let counter = document.getElementById('counter');
  counter.innerText = count;
});