import { baseApi } from "./baseApi";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCampaignComments: builder.query({
      query: (campaignId) => `/comments/campaign/${campaignId}`,

      providesTags: ["Comment"],
    }),

    createComment: builder.mutation({
      query: (data) => ({
        url: "/comments",

        method: "POST",

        body: data,
      }),

      invalidatesTags: ["Comment"],
    }),

    updateComment: builder.mutation({
      query: ({ id, comment }) => ({
        url: `/comments/${id}`,

        method: "PUT",

        body: {
          comment,
        },
      }),

      invalidatesTags: ["Comment"],
    }),

    deleteComment: builder.mutation({
      query: (id) => ({
        url: `/comments/${id}`,

        method: "DELETE",
      }),

      invalidatesTags: ["Comment"],
    }),
  }),
});

export const {
  useGetCampaignCommentsQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
