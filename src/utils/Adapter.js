import configs from '../config';
const { BACKEND_URL } = configs;

const headers = {
  'Content-Type': 'application/json',
}

export default {
  async signup(email, password) {
    try {
      const res = await fetch(`${BACKEND_URL}signup`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password})
      })
      const parsed = await res.json();
      
      if(typeof parsed.error !== 'undefined') {
        throw new Error(parsed.error);
      }

      return parsed;
    } catch (error) {
      return error;
    }
  },
  
  async login(email, password) {
    try {
      const res = await fetch("/login", {
        method: 'POST',
        headers,
        body: JSON.stringify({ email, password }),
      });
      
      if (res.status !== 200) {
        throw new Error('Failed to login.');
      }
      
      const token = await res.text();
      return token;
    } catch (error) {
      return error;
    }
  },

  async getCharacters(token) {
    try {
      const res = await fetch(`${BACKEND_URL}characters`, {
        method: 'GET',
        headers: {
          ...headers,
          authorization: token,
        }
      })
      const parsed = await res.json();
      
      if(typeof parsed.error !== 'undefined') {
        throw new Error(parsed.error);
      }
      
      return parsed.characters;
    } catch (error) {
      return error;
    }
  }
}