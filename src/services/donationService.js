import API from "./api";

export const createDonation = (data) => API.post("/donations", data);

export const verifyDonation = (data) => API.post("/transactions/verify", data);

export const getDonations = () => API.get("/donations");

export const getMyDonations = () => API.get("/donations/my");

export const getDonationReceipt = (id) => API.get(`/donations/receipt/${id}`);
