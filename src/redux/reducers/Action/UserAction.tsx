import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "../../../Api/BaseService";
import { storeUser } from "../../../localStorage/local";
import { IReg } from "../../../types/IUser";

export const signUpClient = createAsyncThunk<string, IReg>(
  "/sign-up/client",
  async (userData) => {
    try {
      const { data } = await axios.post("/client/signup", userData);
      return data;
    } catch (error) {
      alert(`Ошибка ${error}`);
    }
  }
);

export const signUpCafe = createAsyncThunk<string, IReg>(
  "/sign-up/cafe",
  async (formData) => {
    try {
      const { data } = await axios.post("/cafe/signup", formData);
      return data;
    } catch (error) {
      alert(`Ошибка ${error}`);
    }
  }
);

export const signInClient = createAsyncThunk<
  FormData,
  { mail: string; password: string }
>("/sign-in/client", async ({ mail, password }) => {
  try {
    const { data } = await axios.post("/signin", {
      mail,
      password,
    });
    storeUser(data);
    return data;
  } catch (error) {
    alert(`Ошибка ${error}`);
  }
});
