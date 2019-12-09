import ImageService from "../services/image-service.js";
import store from "../store.js";

function _drawImage() {
  let image = store.State.image.url;
  document.body.style.backgroundImage = `url('${image}')`;
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

