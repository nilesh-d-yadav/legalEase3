const signUpButton = document.getElementById("signUpButton"); //blue coloured signup
const signInButton = document.getElementById("signInButton"); //blue coloured signIn
const signInForm = document.getElementById("signIn"); //id of signin diuv
const signUpForm = document.getElementById("signup"); //id of signup div
signUpButton.addEventListener("click", function () {
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
});
signInButton.addEventListener("click", function () {
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
});
