import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    getAllProducts: build.query({
      query: (query) => ({
        url: `/products?searchTerm=${query?.searchTerm || ""}&page=${
          query?.page || ""
        }&sort=${query.sort || ""}`,
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    getSingleProduct: build.query({
      query: (productId) => ({
        url: `/products/single-product/${productId}`,
        method: "GET",
      }),
    }),
    updateProduct: build.mutation({
      query: (data) => {
        return {
          url: `/products`,
          method: "PATCH",
          body: data.product,
        };
      },
      invalidatesTags: ["products"],
    }),
    updateStatusProduct: build.mutation({
      query: (data) => ({
        url: `/products/update-status/${data.productId}?status=${data.status}`,
        method: "PATCH",
      }),
      invalidatesTags: ["products"],
    }),
    getSingleProductBySlug: build.query({
      query: (slug) => ({
        url: `/products/get-product-by-slug?slug=${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useUpdateProductMutation,
  useUpdateStatusProductMutation,
  useGetSingleProductBySlugQuery
} = productApi;
