let questions = document.querySelectorAll(".question");

function displayText(image, heading, text) {
  if (text.style.display == "" || text.style.display == "none") {
    image.setAttribute("src", "/assets/images/icon-minus.svg");
    text.style.display = "block";
    heading.setAttribute("style", "margin-bottom: 1.5rem");
  } else {
    image.setAttribute("src", "/assets/images/icon-plus.svg");
    text.style.display = "none";
    heading.setAttribute("style", "margin-bottom: 0");
  }
}

for (let i = 0; i < questions.length; i++) {
  let textElement = questions[i].querySelector("p"),
    headingElement = questions[i].querySelector("h2"),
    imageElement = questions[i].querySelector("img");
  imageElement.onclick = () => {
    displayText(imageElement, headingElement, textElement);
  };
}
