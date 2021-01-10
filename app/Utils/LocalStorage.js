import {ProxyState} from "../AppState.js"


export function saveTodo() {
  window.localStorage.setItem("taskCount", JSON.stringify(ProxyState.taskCount))
  window.localStorage.setItem("tasksCompleted", JSON.stringify(ProxyState.tasksCompleted))
}
export function loadTodo(){
  let tasksComp = JSON.parse(window.localStorage.getItem("tasksCompleted"))
  let tasksCoun = JSON.parse(window.localStorage.getItem("taskCount"))
  if(tasksComp){
    ProxyState.tasksCompleted = JSON.parse(window.localStorage.getItem("tasksCompleted"))
  }
  if(tasksCoun){
    ProxyState.taskCount = ProxyState.todos.length
    // JSON.parse(window.localStorage.getItem("taskCount"))
  }
}