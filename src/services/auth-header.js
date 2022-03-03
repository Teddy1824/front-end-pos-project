export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'auth-token': `bearer ${user.accessToken}` };
    } else {
      return {};
    }
  }