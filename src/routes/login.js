import fetch from 'node-fetch';
import configs from '../config';
const { BACKEND_URL } = configs;

const headers = {
  'Content-Type': 'application/json',
}
export async function post(req, res) {
  try {
    const { email, password } = req.body;
    
    const result = await fetch(`${BACKEND_URL}login`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
    })
    const parsed = await result.json();
    if(typeof parsed.error !== 'undefined') {
      throw new Error(parsed.error);
    }
    
    req.session.token = parsed.token;
    res.end(parsed.token);
  } catch (error) {
    return error;
  }
  return 'hello';
}