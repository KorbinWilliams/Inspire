export default class Quote {
  constructor(data) {
    this.author = data.author
    this.body = data.body
    this.id = data.id || data._id
  }

  get quoteTemplate() {
    return `
     <h5>"${this.body}"</h5>
     <p>${this.author}</p>
`
  }
}