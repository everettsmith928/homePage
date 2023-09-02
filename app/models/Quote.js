export class Quote {
  constructor(data) {
    this.author = data.author
    this.content = data.content
  }

  get QuoteTemplate() {
    return `<p id="quote">"${this.content}"</p>
      <p id="author">${this.author}</p>`
  }
}