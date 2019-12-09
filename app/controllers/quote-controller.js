import QuoteService from "../services/quote-service.js";

function _drawQuote() {

}

export default class QuoteController {

  constructor() {
    _drawQuote()
    // probably don't need a subscribe here only 1 image per day no change in data
  }


  // only really need a draw function and a simple axios get, do I really even need an async function to contact service (probably do if not just for errors) 
}
