const splitButton = document.querySelector("#split-btn");
const leftTab = document.querySelector("#split-left");

splitButton.addEventListener("click", onSplitBtnClick)
console.log(`splitButton`,splitButton)
function onSplitBtnClick () {
  if (leftTab.className.includes('list-split'))
  leftTab.className = "hidden-aside left-panel"
  else   leftTab.className = "list-split left-panel"
}


//View all btn comment
const DeskComment = document.querySelector("#desk-comment")

const allComments =  DeskComment.querySelectorAll("[data-key=comment]");
const viewAllBtn =  document.querySelector("#view-all-btn-comment")
console.log(`~~~~ allComments`,allComments.length)

console.log(`~~~~ viewAllBtn`,viewAllBtn)
    if (allComments.length > 1){
     viewAllBtn.style.visibility = "visible";
    }
viewAllBtn.addEventListener("click", onViewAllCommentClick)

function onViewAllCommentClick () {
  console.log(`open~~~`)

  if (viewAllBtn.className.includes('hide'))
  {
    Array.from(allComments).map((comment,index)=>{
       if(index > 0) comment.setAttribute("hidden",true)
      })
      console.log(`open~~~`)

      viewAllBtn.className = "view-all-btn"
      viewAllBtn.innerHTML = "View All"

  }
  else {  
    Array.from(allComments).map((comment,index)=>{ 
      if(index > 0) comment.removeAttribute("hidden") })
      viewAllBtn.className = "view-all-btn hide"
      viewAllBtn.innerHTML = "Hide"
      console.log(`close~~~`)
}
}
