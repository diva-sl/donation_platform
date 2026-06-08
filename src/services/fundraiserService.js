import API from "./api";

export const createFundraiser = (data) => API.post("/fundraisers", data);

export const getFundraiser = (id) => API.get(`/fundraisers/${id}`);

export const updateFundraiser = (id, data) =>
  API.put(`/fundraisers/${id}`, data);

export const getMyFundraisers = () => API.get("/fundraisers/my");
