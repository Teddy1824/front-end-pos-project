import axios from 'axios';
const API_URL = 'https://pos-backend-pos.herokuapp.com/user/';
export default {
  login(user) {
    return axios
      .post(API_URL + 'Login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  },
  logout() {
    localStorage.removeItem('user');
  },
  register(user) 
  
  {
    return axios.post(API_URL + 'register', {
      username: user.username,
      phone_number: user.phone_number,
      email: user.email,
      password: user.password
    });
  }
}
