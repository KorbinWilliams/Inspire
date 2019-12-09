import store from "../store.js";

// @ts-ignore
let _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 3000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {

  constructor() {

  }

  async getQuoteAsync() {
    let res = await _quoteApi.get("")
    console.log("quoteData", res)
    store.commit("quote", res.data.quote)
    console.log(store.State.quote)
  }
}

const quoteService = new QuoteService();
export default quoteService;
