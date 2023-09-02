import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteService.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuote() {
  let content = AppState.quote.QuoteTemplate
  setHTML('quote-area', content)
}
export class QuoteController {
  constructor() {
    console.log('Quote Controller Connected')
    AppState.on('account', this.getQuote)
    AppState.on('quote', _drawQuote)
  }

  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }
}