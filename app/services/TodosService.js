import { AppState } from "../AppState.js"
import { Todo } from "../models/Todo.js"
import { api } from "./AxiosService.js"

class TodosService {
  async createTodo(formData) {
    let res = await api.post('api/todos', formData)
    console.log(res.data)
    this.getTodos()

  }
  async getTodos() {
    let res = await api.get('api/todos')
    console.log(res.data)
    AppState.todos = res.data.map(todo => new Todo(todo))
  }

  async deleteTodo(todoId) {
    let res = await api.delete(`api/todos/${todoId}`)
    console.log(res.data, 'Deleted Todo')
    this.getTodos()
  }

  async updateTodo(todoId) {
    let foundTodo = AppState.todos.find(todo => todoId == todo.id)
    foundTodo.completed = !foundTodo.completed
    let res = await api.put(`api/todos/${todoId}`, foundTodo)
    console.log(res.data)
    this.getTodos()
  }
}

export const todosService = new TodosService