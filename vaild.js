const firstName = document.getElementById("first-name"),
  lastName = document.getElementById("last-name"),
  email = document.getElementById("email"),
  password = document.getElementById("password");

function checkRequired(field) {
  if (!field.value)
    return `${field.getAttribute("placeholder")} cannot be empty!`;
  return "";
}

function checkMin(field, min) {
  if (field.value.length < min)
    return `${field.getAttribute("placeholder")} cannot be less then ${min}!`;
  return "";
}

function checkMax(field, max) {
  if (field.value.length > max)
    return `${field.getAttribute(
      "placeholder"
    )} cannot be greater then ${max}!`;
  return "";
}

function checkEmail(field) {
  if (!/^\S+@\S+\.\S+$/.test(field.value))
    return `'${field.value}' is not a valid email!`;
  return "";
}

document.forms[0].onsubmit = function (event) {
  let valid = true,
    massages = {
      first: { element: firstName, errors: [] },
      last: { element: lastName, errors: [] },
      email: { element: email, errors: [] },
      password: { element: password, errors: [] },
    };

  massages.first.errors.push(checkRequired(firstName));
  massages.first.errors.push(checkMin(firstName, 4));
  massages.first.errors.push(checkMax(firstName, 12));

  massages.last.errors.push(checkRequired(lastName));
  massages.last.errors.push(checkMin(lastName, 4));
  massages.last.errors.push(checkMax(lastName, 12));

  massages.email.errors.push(checkRequired(email));
  massages.email.errors.push(checkEmail(email));

  massages.password.errors.push(checkRequired(password));

  for (let [_, data] of Object.entries(massages)) {
    let filter_massages = data.errors.filter((ele) => ele),
      fieldIcon = document.querySelector(
        `#${data.element.getAttribute("id")}-icon`
      ),
      fieldText = document.querySelector(
        `#${data.element.getAttribute("id")}-text`
      );

    data.element.classList.remove("error");
    fieldIcon.style.display = "none";
    fieldText.style.display = "none";

    if (filter_massages.length === 0) continue;

    valid = false;
    data.element.classList.add("error");
    fieldIcon.style.display = "block";
    fieldText.style.display = "block";
    fieldText.textContent = filter_massages[0];
  }

  if (!valid) event.preventDefault();
};

// []
