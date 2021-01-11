import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js"
import { loadTodo } from "../Utils/LocalStorage.js";

class TodoService {
  async getTodos() {
    let res = await api.get('ethan/todos/');
    ProxyState.todos = res.data.map(t => new Todo(t))
    loadTodo()
  }

  async addTodo(todo) {
    let res = await api.post('ethan/todos/', todo);
    ProxyState.taskCount++
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async toggleTodoStatus(todoId) {
    let todo = ProxyState.todos.find(todo => todo.id == todoId);
    // @ts-ignore
    if(document.getElementById(todo.id).checked == true){
      todo.completed = true
      ProxyState.tasksCompleted++
    } else{
      todo.completed = false
      ProxyState.tasksCompleted--
    }
    await api.put('ethan/todos/' + todoId, todo);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    await api.delete('ethan/todos/'+todoId)
   
    if(ProxyState.todos.find(i => i.id == todoId).completed == true){
      ProxyState.tasksCompleted--
    }
    ProxyState.todos = ProxyState.todos.filter(i => i.id !== todoId)
    ProxyState.taskCount--
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;