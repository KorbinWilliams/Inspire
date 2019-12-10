import store from "../store.js";
import Todo from "../models/todo.js"

// @ts-ignore
let todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/KorbinWilliams/todos/",
  timeout: 8000
});

class TodoService {
  async getTodos() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    console.log("todoData", res.data.data)
    store.commit("todos", res.data.data.map(todos => new Todo(todos)))
    console.log("store todos", store.State.todos)
  }

  async addTodoAsync(todo) {
    let res = await todoApi.post("", todo);
    console.log("res from service", res)
    await this.getTodos()
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    if (todo.completed == true) {
      todo.completed = false;
    } else if (todo.completed == false) {
      todo.completed = true;
    }

    let res = await todoApi.put(todoId, todo);
  }

  async removeTodoAsync(todoId) {
    let todo = store.State.todos
    todo.find(t => t.id == todoId)
    todoApi.delete(`/${todoId}`, todo).then(res => {
      this.getTodos();
    });
  }
}


let todoService = new TodoService();
export default todoService;
