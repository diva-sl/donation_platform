import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";
import campaignReducer from "./slices/campaignSlice";
import donationReducer from "./slices/donationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    campaign: campaignReducer,
    donation: donationReducer,
  },
});
