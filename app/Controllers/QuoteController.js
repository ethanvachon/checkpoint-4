
//TODO Create methods for constructor, and rendering the quote to the page

import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js"


function _drawQuote(){
  document.getElementById('quote').innerHTML = ProxyState.quote.Template
}
function _drawClock(){
  let time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  document.getElementById('hours').innerText = hours.toString()
  document.getElementById('minutes').innerText = minutes.toString()
}


export default class QuoteController {
  constructor(){
    ProxyState.on("quote", _drawQuote)
    this.getQuote()
    _drawClock()
    setInterval(() => {
      _drawClock()
    }, 30000);
  }
  getQuote(){
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }

 }