import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../models/Todo.js"

class TodoService {
  async getTodos() {
    let res = await api.get('ethan/todos/');
    ProxyState.todos = res.data.map(t => new Todo(t))
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

    }
    todo.completed = true
    await api.put('ethan/todos/' + todoId, todo);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    await api.delete('ethan/todos/'+todoId)
    ProxyState.taskCount--
    ProxyState.todos = ProxyState.todos.filter(i => i.id !== todoId)
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;