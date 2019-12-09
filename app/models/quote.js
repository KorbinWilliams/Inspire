export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
    this.dialogue = data.body
    this.id = data.id || data._id
  }

  get quoteTemplate() {
    return `
     <h3>"${this.body}"</h3>
     <h5>${this.author}</h5>
`
  }
}