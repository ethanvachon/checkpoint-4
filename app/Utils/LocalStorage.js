import {ProxyState} from "../AppState.js"


export function saveTodo() {
  window.localStorage.setItem("taskCount", JSON.stringify(ProxyState.taskCount))
  window.localStorage.setItem("tasksCompleted", JSON.stringify(ProxyState.tasksCompleted))
}
export function saveName(){
  window.localStorage.setItem('name', JSON.stringify(ProxyState.name))
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
export function loadName(){
  let name = JSON.parse(window.localStorage.getItem('name'))
  if(name){
    ProxyState.name = name
  }
}