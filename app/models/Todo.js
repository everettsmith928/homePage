import { generateId } from "../utils/GenerateId.js"

export class Todo {
  constructor(data) {
    this.id = data.id || generateId()
    this.description = data.description
    this.completed = data.completed || false
  }

  get TodoTemplate() {
    return `
    <div class="d-flex justify-content-between">
      ${this.calculateCheckbox()}
      <p class="p-1">${this.description}</p>
      <button onclick="app.TodosController.deleteTodo('${this.id}')"><i class="mdi mdi-delete"></i></button>
    </div>`
  }

  calculateCheckbox() {
    if (this.completed) {
      return `<input type="checkbox" checked onclick="app.TodosController.updateTodo('${this.id}')" id="${this.id}"></input>`
    } else {
      return `<input type="checkbox" onclick="app.TodosController.updateTodo('${this.id}')" id="${this.id}">`
    }
  }
}