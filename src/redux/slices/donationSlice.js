import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  donations: [],
  totalDonations: 0,
  totalAmount: 0,
  loading: false,
};

const donationSlice = createSlice({
  name: "donation",

  initialState,

  reducers: {
    setDonations: (state, action) => {
      state.donations = action.payload;
    },

    setDonationLoading: (state, action) => {
      state.loading = action.payload;
    },

    setDonationStats: (state, action) => {
      state.totalAmount = action.payload.totalAmount;

      state.totalDonations = action.payload.totalDonations;
    },
  },
});

export const { setDonations, setDonationLoading, setDonationStats } =
  donationSlice.actions;

export default donationSlice.reducer;
