const errorIcon = document.getElementById("error-icon"),
  submitButton = document.getElementById("submit-button"),
  errorText = document.getElementById("error-text"),
  email = document.getElementById("email");

submitButton.onclick = function () {
  let regex = /^\S+@\S+\.\S+$/;
  console.log(regex.test(email.value));

  if (regex.test(email.value)) {
    errorText.style.display = "none";
    errorIcon.style.display = "none";
    email.classList.remove("error");
  } else {
    errorText.style.display = "block";
    errorIcon.style.display = "block";
    email.classList.add("error");
  }
};
