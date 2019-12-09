import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  // TODO document.getElementById("bg-image").style.setProperty("background-image", "url('${this.???}')")
  // change {this.???} to this.prop
}

export default class ImageController {
  constructor() {
    store.subscribe("image", _drawImage)
    _drawImage()
    ImageService.setImageAsync()
  }

  // change image function maybe stretch goal
  async setImageAsync() {
    try {
      ImageService.setImageAsync()
    } catch (error) {
      console.error(error)
    }
  }
}
