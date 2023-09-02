import { AppState } from "../AppState.js"
import { Image } from "../models/Image.js"
import { api } from "./AxiosService.js"


class ImageService {
  constructor() {
    // console.log('Image service Constructed')
  }

  async getImage() {
    // Grabbing a random Image from the API Sandbox
    let res = await api.get('api/images')
    console.log(res.data)
    AppState.currentImage = new Image(res.data)
    // console.log(AppState.currentImage)
  }

}

export const imageService = new ImageService