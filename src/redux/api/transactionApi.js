import { baseApi } from "./baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/transactions/create-order",
        method: "POST",
        body: data,
      }),
    }),

    verifyPayment: builder.mutation({
      query: (data) => ({
        url: "/transactions/verify-payment",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["Campaign", "Donation", "Dashboard", "Transaction"],
    }),

    getMyTransactions: builder.query({
      query: () => "/transactions/my-transactions",

      providesTags: ["Transaction"],
    }),

    getTransactionById: builder.query({
      query: (id) => `/transactions/${id}`,

      providesTags: ["Transaction"],
    }),

    getAllTransactions: builder.query({
      query: (params) => ({
        url: "/transactions",
        params,
      }),

      providesTags: ["Transaction"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyPaymentMutation,
  useGetMyTransactionsQuery,
  useGetTransactionByIdQuery,
  useGetAllTransactionsQuery,
} = transactionApi;
