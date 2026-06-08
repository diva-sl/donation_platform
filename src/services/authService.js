import API from "./api";

export const loginUser = (data) => API.post("/auth/login", data);

export const registerUser = (data) => API.post("/auth/register", data);

export const sendOtp = (mobile) =>
  API.post("/auth/send-otp", {
    mobile,
  });

export const verifyOtp = (data) => API.post("/auth/verify-otp", data);

export const forgotPassword = (email) =>
  API.post("/auth/forgot-password", {
    email,
  });

export const resetPassword = (data) => API.post("/auth/reset-password", data);

export const getProfile = () => API.get("/users/profile");
