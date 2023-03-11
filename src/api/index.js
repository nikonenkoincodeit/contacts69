const BASE_URL = "http://localhost:3000/contacts";
const options = {
  method: '',
  body: '',
  headers: {
    'Content-Type': 'application/json',
  },
}

export async function getData() {
    const response = await fetch(BASE_URL);
    
  if (!response.ok) {
    throw new Error(response.statusText);
    }
    
    return response.json()
}

export async function postData(data) {
  options.method = "POST";
  options.body = JSON.stringify(data);
  const response = await fetch(BASE_URL, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
  
}


