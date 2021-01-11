import { ProxyState } from "../AppState.js";
import todoService from "../Services/TodoService.js";
import {saveTodo} from "../Utils/LocalStorage.js"

//TODO Create the draw function
function _drawTodos() {
  let template = ''
  ProxyState.todos.forEach(i => template += i.Template)
  document.getElementById('todos').innerHTML = template
  // @ts-ignore
  document.getElementById('total-tasks').innerText = ProxyState.taskCount
  ProxyState.todos.forEach(t => {
    if(t.completed == true){
      // @ts-ignore
      document.getElementById(t.id).checked = true
    }
  })
  // @ts-ignore
  
 }
 function _drawCompleted(){
  // @ts-ignore
  document.getElementById('tasks-completed').innerText = ProxyState.tasksCompleted
 }
 

export default class TodoController {
  constructor() {
    this.getTodos();
    //TODO Remember to register your subscribers
    ProxyState.on('todos', _drawTodos)
    ProxyState.on('tasksCompleted', saveTodo)
    ProxyState.on('taskCount', saveTodo)
    ProxyState.on('tasksCompleted', _drawCompleted)
    ProxyState.on('taskCount', _drawTodos)
    
    
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo() {
    window.event.preventDefault()
    let form = window.event.target
    //TODO build the todo object from the data that comes into this method
    let todo = {
      description: form['desc'].value,
      user: 'me',
    };
    // @ts-ignore
    form.reset()
    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}