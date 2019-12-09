export default class Todo {

  constructor(event) {
    // this.error = data.
    // TODO Gotta get data from an error to figure out how to format I think.
    this.name = event.name
  }

  get TodoItemTemplate() {
    return `
    <li>${this.name}</li>
    `
  }

  get TodoErrors() {
    return `
    `
  }

}