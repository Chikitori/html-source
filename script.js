const splitButton = document.querySelector("#split-btn");
const leftTab = document.querySelector("#split-left");

splitButton.addEventListener("click", onSplitBtnClick)

function onSplitBtnClick () {
  if (leftTab.className.includes('list-split'))
  leftTab.className = "hidden-aside left-panel"
  else   leftTab.className = "list-split left-panel"
}


//View all btn comment
const DeskComment = document.querySelector("#desk-comment")

const allComments =  DeskComment.querySelectorAll(`[data-type=comment]`);
const viewAllBtn =  DeskComment.querySelector(".view-all-btn")
    if (allComments.length > 1){
     viewAllBtn.style.visibility = "visible";
     viewAllBtn.addEventListener("click", onViewAllClick())
    }

function onViewAllCommentClick () {
  if (viewAllBtn.className.includes('hide'))
  {
    allComments.map((comment,index)=>{ if(index > 0) comment.style.visibility ="hidden" })
  }
  else {  
    allComments.map((comment,index)=>{ if(index > 0) comment.style.visibility ="visible" })
    viewAllBtn.className = "view-all-btn hide"
}
}
