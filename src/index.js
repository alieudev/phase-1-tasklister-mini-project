document.addEventListener("DOMContentLoaded", () => {
  // let form = document.querySelector('create-task-form')
  //   
  //   let task = event.elements.name.value 
 
  // })
  form()

});

function form() {
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let taskText = form.elements.ntask.value

    let taskLi = document.createElement('li')
    taskLi.textContent = taskText

    let taskList = document.querySelector('#tasks')
    taskList.append(taskLi)
  })
}
