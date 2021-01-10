
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
  document.getElementById('year').innerHTML = time.getFullYear().toString()
  document.getElementById('month').innerHTML = time.getMonth().toString() + 1
  document.getElementById('day').innerHTML = time.getDate().toString()
  document.getElementById('hours').innerText = hours.toString()
  if(minutes < 10){
    document.getElementById('minutes').innerText = `0${minutes}`
  } else {
    document.getElementById('minutes').innerText = minutes.toString()
  }
}


export default class QuoteController {
  constructor(){
    ProxyState.on("quote", _drawQuote)
    this.getQuote()
    _drawClock()
    setInterval(() => {
      _drawClock()
    }, 5000);
  }
  getQuote(){
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }

 }