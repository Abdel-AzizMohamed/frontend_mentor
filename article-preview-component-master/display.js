const displayShare = document.getElementById("display-share"),
  shareContainer = document.getElementById("share-container");

displayShare.onclick = function () {
  if (shareContainer.hasAttribute("style"))
    shareContainer.removeAttribute("style");
  else shareContainer.style.display = "flex";
};
