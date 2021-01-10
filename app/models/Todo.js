export default class Todo {
  constructor(data) {
    this.id = data._id
    this.description = data.description
    this.user = data.user
    this.completed = data.completed
  }
  get Template(){
    return `

    <form class="d-flex justify-content-between align-items-center pb-2">
      <input id="${this.id}" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')">
      <label class="pt-2" for="${this.id}">${this.description}</label>
      <i class="fas fa-trash text-danger pr-2" onclick="app.todoController.removeTodo('${this.id}')"></i>
    </form>
    `
  }
}