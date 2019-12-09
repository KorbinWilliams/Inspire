import QuoteService from "../services/quote-service.js";
import store from "../store.js";

function _drawQuote() {
  let Quote = store.State.quote
  document.querySelector("#quote").innerHTML = Quote.quoteTemplate;
}

export default class QuoteController {

  constructor() {
    _drawQuote()
    store.subscribe("quote", _drawQuote)
    QuoteService.getQuoteAsync()
  }

  async getQuoteAsync() {
    debugger
    try {
      await QuoteService.getQuoteAsync()
    } catch (error) {
      console.error(error)
    }
  }

  // only really need a draw function and a simple axios get, do I really even need an async function to contact service (probably do if not just for errors) 
}
