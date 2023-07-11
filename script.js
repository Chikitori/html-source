const splitButton = document.querySelector("#split-btn");
const leftTab = document.querySelector("#split-left");

splitButton.addEventListener("click", onSplitBtnClick)

function onSplitBtnClick () {
  if (leftTab.className.includes('list-split'))
  leftTab.className = "hidden-aside left-panel"
  else   leftTab.className = "list-split left-panel"
}