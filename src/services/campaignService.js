import API from "./api";

export const getCampaigns = (params) =>
  API.get("/campaigns", {
    params,
  });

export const getCampaignBySlug = (slug) => API.get(`/campaigns/${slug}`);

export const createCampaign = (data) => API.post("/campaigns", data);

export const updateCampaign = (id, data) => API.put(`/campaigns/${id}`, data);

export const deleteCampaign = (id) => API.delete(`/campaigns/${id}`);

export const getMyCampaigns = () => API.get("/campaigns/my-campaigns");

export const getFeaturedCampaigns = () => API.get("/campaigns/featured");
