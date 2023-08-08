document.getElementById('loginBtn').addEventListener('click', function(){
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if(email === "sohan@gmail.com" && password === "1234"){
    window.location.href = 'bank.html';
  }else{
    alert('please! enter write email and password');
  }
})