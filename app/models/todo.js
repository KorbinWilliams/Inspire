
export default class Todo {

  constructor(data) {
    this.description = data.description
    this._id = data.id || data._id
    this.completed = data.completed
    this.user = data.user
  }

  get todoItemTemplate() {
    let checkedTemplate = `
    <p>Done</p>`
    let uncheckedTemplate = `
    <p>Not done</p>
    `
    if (this.completed == true)
      return `
    <li>${this.description} ${checkedTemplate}</li>
    <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this._id}')">Remove</button>`
    else if (this.completed == false)
      return `
    <li>${this.description} ${uncheckedTemplate}</li>
    <button class="btn btn-danger" onclick="app.todoController.removeTodo('${this._id}')">Remove</button>`
  }
}
