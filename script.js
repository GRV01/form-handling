document.getElementById('login-btn').addEventListener('click', function(e) {
  e.preventDefault(); 
  
  const userEmail = document.getElementById('email').value;
  const userPassword = document.getElementById('password').value;
  
  console.log(`Email: ${userEmail}`);
  console.log(`Password: ${userPassword}`);

  
  if (userEmail === "" || userPassword === "") {
      alert("Enter Credentials");
  } else {
      alert("Welcome");
  }
});

document.getElementById('show-password').addEventListener('change', function() {
  const passwordField = document.getElementById('password');
  passwordField.type = this.checked ? 'text' : 'password'; 
});



