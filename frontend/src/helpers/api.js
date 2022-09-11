import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL

export const getMe = () => {
  console.log(API_URL);
  return axios.get()
}

export const getRooms = () => {
  console.log(API_URL);
  return axios.get()
}

export const getMessages = () => {
  console.log(API_URL);
  return axios.get()
}