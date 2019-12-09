export default class Todo {

  constructor(data) {
    this.description = data.description
    this._id = data.id || data._id
    this.completed = true || false
    this.user = data.user
  }

  get TodoItemTemplate() {
    return `
    <li>${this.description}</li>
    `
  }

  get TodoErrors() {
    return `
    `
  }

}