import store from "../store.js"
// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async setImageAsync() {
    let res = await imgApi.get("")
    console.log("imageData", res.data)
    store.commit("image", res.data)
  }
}

const imageService = new ImageService();
export default imageService;
