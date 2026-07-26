import { baseApi } from "./baseApi";

export const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createDonation: builder.mutation({
      query: (data) => ({
        url: "/donations",

        method: "POST",

        body: data,
      }),
    }),

    getCampaignDonations: builder.query({
      query: (campaignId) => `/donations/campaign/${campaignId}`,

      providesTags: ["Donation"],
    }),

    getTopDonors: builder.query({
      query: (campaignId) => `/donations/top-donors/${campaignId}`,
    }),

    getMyDonations: builder.query({
      query: () => "/donations/my-donations",
    }),
  }),
});

export const {
  useCreateDonationMutation,
  useGetCampaignDonationsQuery,
  useGetTopDonorsQuery,
  useGetMyDonationsQuery,
} = donationApi;
