import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns: [],
  featuredCampaigns: [],
  currentCampaign: null,
  loading: false,
};

const campaignSlice = createSlice({
  name: "campaign",

  initialState,

  reducers: {
    setCampaigns: (state, action) => {
      state.campaigns = action.payload;
    },

    setFeaturedCampaigns: (state, action) => {
      state.featuredCampaigns = action.payload;
    },

    setCurrentCampaign: (state, action) => {
      state.currentCampaign = action.payload;
    },

    setCampaignLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setCampaigns,
  setFeaturedCampaigns,
  setCurrentCampaign,
  setCampaignLoading,
} = campaignSlice.actions;

export default campaignSlice.reducer;
