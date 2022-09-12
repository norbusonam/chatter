import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export const getMe = () => {
  const authToken = window.localStorage.getItem('authToken');
  return axios.get(API_URL + 'user/me', {
    auth: authToken,
  });
}

export const login = (payload) => {
  return axios.post(API_URL + 'user/login', payload);
}

export const signup = (payload) => {
  return axios.post(API_URL + 'user/signup', payload);
}

export const createRoom = (payload) => {
  const authToken = window.localStorage.getItem('authToken');
  return axios.post(API_URL + 'room', payload, {
    auth: authToken,
  });
}

export const getRooms = () => {
  // just gets user's rooms for now
  const authToken = window.localStorage.getItem('authToken');
  return axios.get(API_URL + 'room?onlyMine=true', {
    auth: authToken,
  });
}

export const getMessages = (roomId, payload) => {
  const authToken = window.localStorage.getItem('authToken');
  return axios.get(API_URL + `room/${roomId}/message`, {
    auth: authToken,
  });
}

export const getUsersInRoom = (roomId, payload) => {
  const authToken = window.localStorage.getItem('authToken');
  return axios.get(API_URL + `room/${roomId}/user`, {
    auth: authToken,
  });
}