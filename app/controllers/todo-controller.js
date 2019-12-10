import TodoService from "../services/todo-service.js";
import store from "../store.js";


function _drawTodos() {
  debugger
  let Todos = store.State.todos
  let template = ""
  Todos.forEach(Todo => template += Todo.todoItemTemplate)
  document.querySelector("#todos").innerHTML = template
}
function _drawCount() {
  let count = store.State.todos.length.toString()
  document.querySelector("#count").innerHTML = ` Number of tasks ${count}`
}

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
    store.subscribe("todos", _drawCount);
  }

  async addTodo(e) {
    debugger
    e.preventDefault();
    let form = e.target;
    let todo = {
      description: form.todo.value
    }
    console.log("todo")
    try {
      await TodoService.addTodoAsync(todo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
