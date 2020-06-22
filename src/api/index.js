import axios from "axios";
const BASE_URL = "http://localhost:5000";

const getheaders = () => ({
  authorization: `Bearer ${localStorage.getItem("tldr/token")}`,
});

export const register = (username, email, password) =>
  axios.post(BASE_URL + "/register", { username, email, password });

export const login = (username, password) =>
  axios.post(BASE_URL + "/login", { username, password });

export const fetch = () => {
  const config = {
    headers: getheaders(),
  };
  return axios.get(BASE_URL + "/users/me", config);
};

export const createPost = (folder, title, content) => {
  const body = {
    folder,
    title,
    content,
  };
  const config = {
    headers: getheaders(),
  };
  return axios.post(BASE_URL + "/posts", body, config);
};

export const updatePost = (id, title, content) => {
  const body = {
    title,
    content,
  };
  const config = {
    headers: getheaders(),
  };
  return axios.patch(BASE_URL + `/posts/${id}`, body, config);
};

export const deletePost = id => {
  const config = {
    headers: getheaders(),
  };
  return axios.delete(BASE_URL + `/posts/${id}`, config);
};

export const createFolder = title => {
  const body = {
    title,
  };
  const config = {
    headers: getheaders(),
  };
  return axios.post(BASE_URL + "/folders", body, config);
};

export const deleteFolder = id => {
  const config = {
    headers: getheaders(),
  };
  return axios.delete(BASE_URL + `/folders/${id}`, config);
};

export const updateFolder = (id, title) => {
  const body = {
    title,
  };
  const config = {
    headers: getheaders(),
  };
  return axios.patch(BASE_URL + `/folders/${id}`, body, config);
};
