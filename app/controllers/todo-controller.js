import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let Todos = store.State.todos
  let template = ""
  Todos.forEach(Todo => template += Todo.TodoItemTemplate)
  document.querySelector("#todos").innerHTML = template
}

// function _drawTodoErrors() {
//   // let Errors = template error? 
//   // document.querySelector("#todo-error").innerHTML = template
// }

// function _drawWelcomePerson() {

//   // use baseURL to designate username?
//   // baseURL: "https://bcw-sandbox.herokuapp.com/api/KorbinWilliams/todos/",
//   // got from todo-service
// }
export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
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

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
