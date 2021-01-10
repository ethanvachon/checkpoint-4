
//TODO Create methods for constructor, and rendering the quote to the page

import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js"
import {saveName} from "../Utils/LocalStorage.js"
import {loadName} from "../Utils/LocalStorage.js"


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
function _drawName(){
  document.getElementById("name-text").innerText = ProxyState.name
  let time = new Date()
  let nameTime = document.getElementById('name-time')
  let hours = time.getHours()
  if(hours <= 12){
    nameTime.innerText = 'Good Morning'
  } else if (hours <= 19){
    nameTime.innerText = 'Good Afternoon'
  } else {
    nameTime.innerText = 'Good Evening'
  }
}


export default class QuoteController {
  constructor(){
    loadName()
    this.nameInput()
    _drawName()
    ProxyState.on("quote", _drawQuote)
    ProxyState.on("name", _drawName)
    this.getQuote()
    _drawClock()
    setInterval(() => {
      _drawClock()
    }, 5000);
  }
  nameInput(){
    if(!ProxyState.name){
      document.getElementById('background-image').classList.add('brightness')
      document.getElementById('nameinput').classList.remove('d-hidden')
    }
  }
  getName(){
    window.event.preventDefault()
    let name = window.event.target['name'].value
    quoteService.getName(name)
    saveName()
    // @ts-ignore
    window.event.target.reset()
    document.getElementById('background-image').classList.remove('brightness')
    document.getElementById('nameinput').classList.add('d-hidden')
  }
  getQuote(){
    try {
      quoteService.getQuote()
    } catch (error) {
      console.error(error)
    }
  }

 }