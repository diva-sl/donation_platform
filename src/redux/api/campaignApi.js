import { baseApi } from "./baseApi";

export const campaignApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCampaigns: builder.query({
      query: (params) => ({
        url: "/campaigns",
        params,
      }),

      providesTags: ["Campaign"],
    }),

    getCampaign: builder.query({
      query: (code) => `/campaigns/code/${code}`,

      providesTags: ["Campaign"],
    }),

    createCampaign: builder.mutation({
      query: (data) => ({
        url: "/campaigns",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Campaign"],
    }),

    updateCampaign: builder.mutation({
      query: ({ id, data }) => ({
        url: `/campaigns/${id}`,
        method: "PUT",
        body: data,
      }),

      invalidatesTags: ["Campaign"],
    }),

    submitCampaign: builder.mutation({
      query: (id) => ({
        url: `/campaigns/${id}/submit`,
        method: "POST",
      }),

      invalidatesTags: ["Campaign"],
    }),

    getMyCampaigns: builder.query({
      query: () => "/campaigns/my-campaigns",

      providesTags: ["Campaign"],
    }),
  }),
});

export const {
  useGetCampaignsQuery,
  useGetCampaignQuery,
  useCreateCampaignMutation,
  useUpdateCampaignMutation,
  useSubmitCampaignMutation,
  useGetMyCampaignsQuery,
} = campaignApi;
