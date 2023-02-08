import axios from './index';

export async function loginApi(email, password) {
  return axios.post("/auth/login", {
    email,
    password,
  });
}

export async function registerApi(name, email, password) {
  return axios.post("/auth/register", {
    name,
    email,
    password,
  });
}


export async function getLoggedInUser() {
  return axios.get(`/auth/getuser`);
}

export async function getUser(userId) {
  return axios.get(`/user/${userId}`);
}
