// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post('https://127.0.0.1:8000/api/login', {
      email,
      password,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async () => {
  try {
    let res = await axios.get(`/api/auth/me`);

    return res.data.user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await axios.get(`/api/auth/logout`);
  } catch (error) {
    console.log(error);
  }
};