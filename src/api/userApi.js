import axios from "axios";

export const userApi = axios.create({ baseURL: "http://localhost:3000" });

export const userLogin = async ({ email, password }) => {
  try {
    const response = await userApi.post("/api/users/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
