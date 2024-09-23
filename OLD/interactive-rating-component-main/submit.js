const feedbackForm = document.getElementById("feedback-form"),
  completionForm = document.getElementById("completion-form"),
  feedbackSubmit = document.getElementById("feedback-submit"),
  scoreSelectors = document.querySelectorAll("#score-selector li"),
  scoreDisplay = document.getElementById("selected-score");

let selectedScore = 0;

function displayFeedback() {
  feedbackForm.setAttribute("style", "display: none");
  completionForm.setAttribute("style", "display: block");
  scoreDisplay.textContent = selectedScore;
}

feedbackSubmit.onclick = displayFeedback;

scoreSelectors.forEach((item) => {
  item.onclick = () => {
    selectedScore = item.dataset.value;
  };
});
