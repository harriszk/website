import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import blogEndpoints from "./projects/blog/data/blogEndpoints.ts";

const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    endpoints: (build) => ({
        ...blogEndpoints(build),
    }),
});

export default api;
