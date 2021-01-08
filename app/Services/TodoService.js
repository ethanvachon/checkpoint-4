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
    ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    console.log(ProxyState.todos)
    console.log(todoId)
    await api.delete('ethan/todos/'+todoId)
    ProxyState.todos = ProxyState.todos.filter(i => i.id !== todoId)
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
  }
}

const todoService = new TodoService();
export default todoService;