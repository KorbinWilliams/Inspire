export default class Todo {

  constructor(data) {
    // this.error = data.
    // TODO Gotta get data from an error to figure out how to format I think.



  }

  get TodoItemTemplate() {
    return `
    
    `
  }

  get TodoErrors() {
    return `
    <p>${this.error}</p>
    `
  }

}