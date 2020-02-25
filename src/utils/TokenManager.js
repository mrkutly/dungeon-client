const TOKEN = 'authToken';

export default {
  getToken() {
    return localStorage.getItem(TOKEN)
  },
  setToken(token) {
    return localStorage.setItem(TOKEN, token)
  },
  deleteToken() {
    return localStorage.removeItem(TOKEN);
  }
}