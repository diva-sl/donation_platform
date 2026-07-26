import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL_V1 || (import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/v1` : "http://localhost:5000/api/v1"),

    credentials: "include",
  }),

  endpoints: () => ({}),
});
