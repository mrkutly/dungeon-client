import configs from '../config';
const { BACKEND_URL } = configs;

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

export async function get(endpoint, authorization, thisArg = window) {
  const url = BACKEND_URL + endpoint;
  const response = await thisArg.fetch(url, { 
    method: "GET", 
    headers: {
      ...headers,
      authorization
    }, 
  });

  return response.json();
}

export async function post(endpoint, authorization, body, thisArg = window) {
  const url = BACKEND_URL + endpoint;
  const response = await thisArg.fetch(url, { 
    method: "POST", 
    headers: {
      ...headers,
      authorization
    }, 
    body: JSON.stringify(body) 
  });

  return response.json();
}

export async function put(endpoint, authorization, body, thisArg = window) {
  const url = BACKEND_URL + endpoint;
  const response = await thisArg.fetch(url, { 
    method: "PUT", 
    headers: {
      ...headers,
      authorization
    }, 
    body: JSON.stringify(body) 
  });

  return response.json();
}

export async function patch(endpoint, authorization, body, thisArg = window) {
  const url = BACKEND_URL + endpoint;
  const response = await thisArg.fetch(url, { 
    method: "PATCH", 
    headers: {
      ...headers,
      authorization
    }, 
    body: JSON.stringify(body) 
  });

  return response.json();
}

export async function del(endpoint, authorization, thisArg = window) {
  const url = BACKEND_URL + endpoint;
  const response = await thisArg.fetch(url, { 
    method: "DELETE", 
    headers: {
      ...headers,
      authorization
    }, 
  });

  return response.json();
}

export async function login(email, password) {
  try {
    const res = await fetch("/login", {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
    });
    
    if (res.status !== 200) {
      throw new Error('Failed to login.');
    }
    const parsed = await res.json();
    
    if (parsed.error) {
      throw new Error(parsed.error);
    }

    return parsed;
  } catch (error) {
    return error;
  }
}

export async function signup(email, password) {
  try {
    const res = await fetch(`/signup`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password})
    })
    const parsed = await res.json();
    
    if(parsed.error) {
      throw new Error(parsed.error);
    }

    return parsed;
  } catch (error) {
    return error;
  }
}