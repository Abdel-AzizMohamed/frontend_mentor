const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.onclick = function () {
    const answer = question.querySelector(".answer"),
      icon = question.querySelector("img");

    answer.classList.toggle("wrap");
    const iconPath = answer.classList.contains("wrap") ? "plus" : "minus";
    icon.setAttribute("src", `assets/images/icon-${iconPath}.svg`);
  };
});
