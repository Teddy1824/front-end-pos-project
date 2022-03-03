import axios from 'axios';
import auth from './auth-header';
const API_URL = 'https://pos-backend-pos.herokuapp.com/user/login';
export default {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  },
  getUser() {
    return axios.get(API_URL + 'user', { headers: auth-token() });
  }
}