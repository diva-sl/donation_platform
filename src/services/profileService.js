import API from "./api";

export const getUserProfile = () => API.get("/users/profile");

export const updateProfile = (data) => API.put("/users/profile", data);

export const uploadAvatar = (formData) =>
  API.post("/users/avatar", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getDashboard = () => API.get("/users/dashboard");
