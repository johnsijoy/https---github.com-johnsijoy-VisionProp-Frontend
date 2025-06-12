import axios from "axios";

const API = "http://localhost:5000/users";

export const registerUser = async (user) => {
  const res = await axios.get(`${API}?email=${user.email}`);
  if (res.data.length > 0) throw new Error("User already exists");

  await axios.post(API, user);
};

export const loginUser = async (email, password) => {
  const res = await axios.get(`${API}?email=${email}`);
  if (res.data.length === 0) throw new Error("User not found");

  const user = res.data[0];
  if (user.password !== password) throw new Error("Invalid password");

  return user;
};
