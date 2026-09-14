const USERNAME = "Kazhi";
const PASSWORD = "2211061";
const loginScreen = document.getElementById("loginScreen");
const officeScreen = document.getElementById("officeScreen");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

function showOffice() {
  loginScreen.hidden = true;
  officeScreen.hidden = false;
}

function showLogin() {
  sessionStorage.removeItem("kazhiOfficeLoggedIn");
  officeScreen.hidden = true;
  loginScreen.hidden = false;
  loginForm.reset();
  loginError.textContent = "";
  usernameInput.focus();
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (usernameInput.value.trim() === USERNAME && passwordInput.value === PASSWORD) {
    sessionStorage.setItem("kazhiOfficeLoggedIn", "true");
    loginError.textContent = "";
    showOffice();
  } else {
    loginError.textContent = "Неверный логин или пароль";
    passwordInput.select();
  }
});

document.getElementById("showPassword").addEventListener("click", (event) => {
  const hidden = passwordInput.type === "password";
  passwordInput.type = hidden ? "text" : "password";
  event.currentTarget.textContent = hidden ? "Скрыть" : "Показать";
});

document.getElementById("logoutButton").addEventListener("click", showLogin);

if (sessionStorage.getItem("kazhiOfficeLoggedIn") === "true") showOffice();
else showLogin();
