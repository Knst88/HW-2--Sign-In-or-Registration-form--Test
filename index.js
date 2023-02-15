function confirmPass() {
    let firstPassword = document.getElementById("WriteYourPassword").value;
    let confirmPassword = document.getElementById("ConfirmYourPassword").value;
    let confirmButton = document.getElementById("submitRegistrationForm");
    let BoxConfirmPss = document.getElementById("ConfirmYourPassword");
  
    if (firstPassword !== confirmPassword) {
      confirmButton.disabled = true;
      BoxConfirmPss.style.boxShadow =
        "0px 0px 10px 4px rgba(255, 100, 100, 0.39)";
    } else {
      confirmButton.disabled = false;
      BoxConfirmPss.style.boxShadow = "none";
    }
  }
  window.addEventListener("DOMContentLoaded", confirmPass());
  