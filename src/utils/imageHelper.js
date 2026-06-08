const API_URL = import.meta.env.VITE_API_URL;

export const imageUrl = (path) => {
  if (!path) return "/images/default.jpg";

  return `${API_URL}/${path}`;
};
