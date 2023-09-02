import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {
  async getQuote() {
    let res = await api.get('api/quotes')
    AppState.quote = new Quote(res.data)
    // console.log(res.data)
    console.log(AppState.quote)
  }

}

export const quoteService = new QuoteService