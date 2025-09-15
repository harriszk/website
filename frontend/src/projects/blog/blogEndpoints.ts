import type { EndpointBuilder } from "@reduxjs/toolkit/query";

const blogEndpoints = (build: EndpointBuilder<any, any, any>) => ({
    getPosts: build.query<any, void>({
        query: () => "/posts",
    }),
    getPostById: build.query({
        query: (id: string) => `/posts/${id}`,
    }),
    createPost: build.mutation({
        query: (newPost) => ({
            url: "/posts",
            method: "POST",
            body: newPost,
        }),
    }),
});


export default blogEndpoints;