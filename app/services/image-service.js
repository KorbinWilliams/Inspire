import store from "../store.js"
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

class ImageService {
  async setImageAsync() {
    let res = await imgApi.get("")
    console.log("imageData", res.data)
    store.commit("image", res.data)
  }
}

const imageService = new ImageService();
export default imageService;
