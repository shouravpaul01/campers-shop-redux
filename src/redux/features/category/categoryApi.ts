import { baseApi } from "../../api/baseApi";


const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (data) => ({
        url: "/categories/create-category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),
    getAllCategories: build.query({
      query: (query) => ({
        url: `/categories?searchTerm=${query?.searchTerm || ''}&page=${query?.page || ''}`,
        method: "GET",
      }),
      providesTags: ["categories"],
    }),
    getSingleCategory: build.query({
      query: (categoryId) => ({
        url: `/categories/single-category/${categoryId}`,
        method: "GET",
      }),
    }),
    updateCategory: build.mutation({
      query: (data) => {
        return {
          url: `/categories/${data._id}`,
          method: "PATCH",
          body: data.category,
        };
      },
      invalidatesTags: ["categories"],
    }),
    updateStatusCategory: build.mutation({
      query: (data) => ({
        url: `/categories/update-status/${data.categoryId}?status=${data.status}`,
        method: "PATCH",
      }),
      invalidatesTags: ["categories"],
    }),
    getAllActiveCategories: build.query({
      query: () => ({
        url: "/categories/active-categories",
        method: "GET",
      }),
    }),
  }),
});

export const {
 useCreateCategoryMutation,
 useGetAllCategoriesQuery,
 useGetSingleCategoryQuery,
 useUpdateCategoryMutation,
 useUpdateStatusCategoryMutation,
 useGetAllActiveCategoriesQuery
} = categoryApi;
