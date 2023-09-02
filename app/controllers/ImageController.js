import { AppState } from "../AppState.js"
import { imageService } from "../services/ImageService.js"
import { setText } from "../utils/Writer.js"

function _setImage() {
  // Setting the Image as the background in the body
  let body = document.body.style.backgroundImage = `url("${AppState.currentImage.url}")`
  // Setting the Author in the HTML
  // let author = document.getElementById('image-author')
  setText('image-author', 'Image By: ' + AppState.currentImage.author)
}
export class ImageController {
  constructor() {
    console.log('Image Controller')
    AppState.on('account', this.getImage)
    AppState.on('currentImage', _setImage)
  }

  async getImage() {
    try {
      imageService.getImage()
    } catch (error) {
      console.error(error)
    }
  }
}
