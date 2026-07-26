import { baseApi } from "./baseApi";

export const updateApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCampaignUpdates: builder.query({
      query: (campaignId) => `/updates/campaign/${campaignId}`,

      providesTags: ["Update"],
    }),

    createUpdate: builder.mutation({
      query: (data) => ({
        url: "/updates",

        method: "POST",

        body: data,
      }),

      invalidatesTags: ["Update"],
    }),

    updateCampaignUpdate: builder.mutation({
      query: ({ id, data }) => ({
        url: `/updates/${id}`,

        method: "PUT",

        body: data,
      }),

      invalidatesTags: ["Update"],
    }),

    deleteCampaignUpdate: builder.mutation({
      query: (id) => ({
        url: `/updates/${id}`,

        method: "DELETE",
      }),

      invalidatesTags: ["Update"],
    }),
  }),
});

export const {
  useGetCampaignUpdatesQuery,
  useCreateUpdateMutation,
  useUpdateCampaignUpdateMutation,
  useDeleteCampaignUpdateMutation,
} = updateApi;
