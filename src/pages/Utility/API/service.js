import axios from "axios";
import CONSTANT from "../constnt";

const Services = axios.create({
  baseURL: CONSTANT.BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("authUser")}`,
  },
});

export default Services;
