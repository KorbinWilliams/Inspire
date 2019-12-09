import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let Todos = store.State.todos
  let template = ""
  Todos.forEach(t => template += t.TodoItemTemplate)
  document.querySelector("#todos").innerHTML = template
}

function _drawTodoErrors() {
  // let Errors = template error? 
  document.querySelector("#todo-error").innerHTML = template
}
export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos)
    TodoService.getTodos();
  }

  async addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
    };
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
