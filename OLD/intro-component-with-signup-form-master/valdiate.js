const submit = document.querySelector("submit");
let formsElements = {};

formsElements.push(document.querySelector("first-name"));
formsElements.push(document.querySelector("last-name"));
formsElements.push(document.querySelector("email"));
formsElements.push(document.querySelector("password"));

function validateForm(e) {
  formsElements.foreach((element) => {
    if (element.value === "") {
    }
  });
}

submit.onsubmit = validateForm;
