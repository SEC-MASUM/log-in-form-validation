document.getElementById("invalid-email").style.display = "none";
document.getElementById("valid-email").style.display = "none";

/* Using regular expressions is probably the best way. You can see a bunch of tests here (taken from chromium) */

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function () {
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const emailText = emailField.value;
  const passwordText = passwordField.value;
  if (validateEmail(emailText) && passwordText) {
    alert("Successful your login");
  }
  if (validateEmail(emailText)) {
    document.getElementById("valid-email").style.display = "block";
    document.getElementById("invalid-email").style.display = "none";
  } else {
    document.getElementById("valid-email").style.display = "none";
    document.getElementById("invalid-email").style.display = "block";
  }
});

const validate = () => {
  var x = document.getElementById("email");
  x.value = x.value.toLowerCase();
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const emailText = emailField.value;
  const passwordText = passwordField.value;
  if (validateEmail(emailText)) {
    document.getElementById("valid-email").style.display = "block";
    document.getElementById("invalid-email").style.display = "none";
  } else {
    document.getElementById("valid-email").style.display = "none";
    document.getElementById("invalid-email").style.display = "block";
  }
};
