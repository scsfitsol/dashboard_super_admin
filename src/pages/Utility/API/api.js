import axios from "axios";
import notify from "../coustemFunction";
// import { toast } from "react-toastify";
import Services from "./service";

const apiCall = async (
  endPoint,
  type,
  payload = {},
  errorMessage = { heading: "", message: "" }
) => {
  try {
    switch (type) {
      case "post":
        return await Services.post(endPoint, payload);
      case "delete":
        return await Services.delete(endPoint);
      case "patch":
        return await Services.patch(endPoint, payload);
      default:
        return await Services.get(endPoint);
    }
  } catch (error) {
    notify.warning(
      errorMessage.message !== ""
        ? errorMessage.message
        : "Enter valid email id and password",
      errorMessage.heading !== "" ? errorMessage.heading : "Login Error",
      3000,
      null,
      null,
      ""
    );
    return -1;
  }
};

// ========================== ADMIN LOGIN ==========================
export const adminLogin = (payload) => apiCall("/admin/login", "post", payload);

// ========================== CLIENT API ==========================
export const getAllClient = () => apiCall("/client");
export const addClient = (payload) => apiCall("/client", "post", payload);

// ========================== DRIVER API ==========================
export const getAllDriver = () => apiCall("/driver");

// ========================== TRANSPORTER API ==========================
export const getAllTransporter = () => apiCall("/transporter");

// ========================== VEHICLE API ==========================
export const getAllVehicle = () => apiCall("/vehicle");

// ========================== TRIP API ==========================
export const getAllTrip = () => apiCall("/trip");

// ========================== PLANT API ==========================
export const getAllPlant = () => apiCall("/plant");

export default apiCall;
