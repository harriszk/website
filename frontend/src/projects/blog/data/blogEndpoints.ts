import type { EndpointBuilder } from "@reduxjs/toolkit/query";

const blogEndpoints = (build: EndpointBuilder<any, any, any>) => ({
    getPosts: build.query<any, void>({
        query: () => "/posts",
    }),
    getPostById: build.query({
        query: (id: string) => `/posts/${id}`,
        // keepUnusedDataFor: 0,
    }),
    createPost: build.mutation({
        query: (newPost) => ({
            url: "/posts",
            method: "POST",
            body: newPost,
        }),
    }),
    deletePost: build.mutation({
        query: (id: string) => ({
            url: `/posts?id=${id}`,
            method: "DELETE",
        }),
    }),
});

export default blogEndpoints;
