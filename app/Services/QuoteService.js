import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";

//TODO create methods to retrieve data and update the State
class QuoteService {
  getName(name) {
    ProxyState.name = name
  }
  async getQuote() {
    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res.data)
    console.log(res.data)
    console.log(ProxyState.quote)
    
  }
}

const quoteService = new QuoteService();
export default quoteService;