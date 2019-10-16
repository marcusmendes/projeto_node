import axios, { AxiosInstance } from 'axios';
import Auth from '../config/Authentication';

class Api {
  public request(): AxiosInstance {
    return axios.create({
      baseURL: Auth.config().url,
    });
  }
}

export default new Api();
