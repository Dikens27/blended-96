import axios from "axios";

export const userApi = axios.create({
  baseURL: "http://localhost:3000",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

userApi.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
  }
);

export const userLogin = async ({ email, password }) => {
  try {
    const response = await userApi.post("/api/auth/login", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getContacts = async () => {
  try {
    const response = await userApi.get("/api/contacts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
