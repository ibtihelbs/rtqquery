import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productsApi = createApi({
  reducerPath: "lol",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["cart"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "cart",
      providesTags: ["Cart"],
    }),
    addToCart: builder.mutation({
      query: (product) => ({
        url: "cart",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCart: builder.mutation({
      query: (product) => ({
        url: `cart/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Cart"],
    }),
    deleteItem: builder.mutation({
      query: (id) => ({
        url: `cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const {
  useGetProductsQuery,
  useAddToCartMutation,
  useDeleteItemMutation,
  useUpdateCartMutation,
} = productsApi;
