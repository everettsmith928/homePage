import { AppState } from "../AppState.js"
import { todosService } from "../services/TodosService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawTodos() {
  let template = ``
  let todosCount = 0
  AppState.todos.forEach(todo => {
    template += todo.TodoTemplate
    !todo.completed ? todosCount++ : todosCount = todosCount
  })
  setHTML('todos-list', template)
  setHTML('todo-count', 'Incomplete Todos: ' + todosCount)
}
export class TodosController {
  constructor() {
    console.log('Todos Controller Connected')
    AppState.on('account', this.getTodos)
    AppState.on('todos', _drawTodos)
  }

  async createTodo() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    try {
      await todosService.createTodo(formData)
      // @ts-ignore
      document.getElementById('todo-form').reset()
    } catch (error) {
      console.error(error)
    }

  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteTodo(todoId) {
    if (await Pop.confirm()) {
      try {
        todosService.deleteTodo(todoId)
      } catch (error) {
        Pop.error(error)
      }
    }
  }

  async updateTodo(todoId) {
    document.getElementById(todoId).disabled = true
    try {
      await todosService.updateTodo(todoId)
    } catch (error) {
      Pop.error(error)
    }
    document.getElementById(todoId).disabled = false
  }
}