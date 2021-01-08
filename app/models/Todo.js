export default class Todo {
  constructor(data) {
    this.id = data._id
    this.description = data.description
    this.user = data.user
    this.completed = data.completed
  }
  get Template(){
    return `
    
    <li class="d-flex justify-content-between">${this.description}
    <i class="fas fa-trash text-danger pr-2" onclick="app.todoController.removeTodo('${this.id}')"></i>
    </li>
    `
  }
}