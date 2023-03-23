import axioss from "axios";
import Cookies from "js-cookie";
import { baseURL } from "./api";


export const axios = axioss.create({
    baseURL: "https://unifood.onrender.com/",
  });

export const token = Cookies.get('user')


