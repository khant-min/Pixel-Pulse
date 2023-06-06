import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/api/posts",
      transformResponse: (res: any) => res.reverse(),
      providesTags: ["Posts"],
    }),
    addPosts: builder.mutation({
      query: (post: object) => ({
        url: "/api/posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostsMutation } = apiSlice;
