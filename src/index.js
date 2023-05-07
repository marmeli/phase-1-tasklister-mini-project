document.addEventListener("DOMContentLoaded", () => {
  addingEventListeners()
});
function addingEventListerners() {
  document
  .getElementById("create-task-form")
  .addEventListeners("submit", handleFormSubmit)

}

function handleFormSubmit(e){
  e.preventDefualt()
  // console.log(e)
  const task = e.target[0].value
  // 
  console.log(task)

  displayTask(task)
}

function displayTask(task){

const taskUl = document.getElementById("tasks")
// console.log(taskUl)
const taskLi = document.createElement("li")

const deleteBtn = document.createElement("button")
deleteBtn.textcontent = "x"
deleteBtn.addEventListener("click", deleteTask)

taskLi.textcontent = task + " "
taskLi.appendChild(deleteBtn)
taskUl.appendChild(taskLi)
}

function deleteTask(e) {
  console.log(e)
  e.target.parentNode.remove()
}