function validateEmail(email) {
  if (email == "") {
    email.preventDefault();
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var email = document.getElementById("email");
  email = email.value;
  if (validateEmail(email)) {
    document.getElementById("email").classList.remove("errorInput");
    document.getElementById("errorText").style.visibility = "hidden";
  } else {
    document.getElementById("errorText").style.visibility = "visible";
    document.getElementById("email").classList.add("errorInput");
  }
  alert("THANKS FOR SUBSCRIPTION");
  return false;
}
