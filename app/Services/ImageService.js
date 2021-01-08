//TODO create methods to retrieve data and save to the State
import { ProxyState } from "../AppState.js";
import {api} from "../Services/AxiosService.js"
class ImageService {
  async getImage() {
    let res = await api.get('images')
    ProxyState.image = res.data.url
  }
}

const imageService = new ImageService();
export default imageService;