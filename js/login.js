// @ts-nocheck
// step-1 : add click event handler with the submit button
  

document.getElementById("btn_submit").addEventListener("click", function () {
  //    step2 : get the email address
  const emailFiled = document.getElementById("user_email");
 
  const email = emailFiled.value;
  const passwordField = document.getElementById("user_password");
 
  const password = passwordField.value;

  if (email === "rich@gmail.com" && password === "taka") {
   window.location.href='bank.html'
  } else {
    alert("Bagh bsdk . keda re tui");
  }
});
