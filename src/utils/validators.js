export const isEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const isPhone = (phone) => {
  return /^[6-9]\d{9}$/.test(phone);
};

export const isStrongPassword = (password) => {
  return password.length >= 6;
};
