import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) =>({
    
  })
});
