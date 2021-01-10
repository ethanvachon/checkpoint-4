
//TODO Create methods for constructor, and rendering the image to the page
import imageService from "../Services/ImageService.js"
import { ProxyState } from "../AppState.js";

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImage(){
  document.getElementById('background-image').setAttribute("style", `background-image:url(${ProxyState.image})`)
}



export default class ImageController {
constructor(){
  ProxyState.on('image', _drawImage)
  this.getImage()
}
getImage(){
  try {
    imageService.getImage()
  } catch (error) {
    console.error(error)
  }
}
toggleMode(){
  // @ts-ignore
  if(document.getElementById('dark-mode').checked == true){

  }
}


 }