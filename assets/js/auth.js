/* Auth Page javascript */

function showLogin() {
  document.getElementById("loginView").classList.add("active");
  document.getElementById("signupView").classList.remove("active");
}
function showSignup() {
  document.getElementById("signupView").classList.add("active");
  document.getElementById("loginView").classList.remove("active");
}
function login() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    localStorage.setItem("loggedInUser", user);
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password");
  }
}

function createAccount() {
  let user = document.getElementById("signupUser").value;
  let pass = document.getElementById("signupPass").value;

  if (user == "" || pass == "") {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("username", user);
  localStorage.setItem("password", pass);

  alert("Account created successfully!");
  showLogin();
}

if (window.location.hash === "#signup") {
  showSignup();
} else {
  showLogin();
}
