import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import blogSlice from "./projects/blog/blogSlice.ts";
import api from "./api.ts";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        blog: blogSlice,
    },
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware().concat(api.middleware);

        if (import.meta.env.VITE_APP_MODE !== "production") {
            return middleware.concat(logger);
        }

        return middleware;
    },
    devTools: import.meta.env.VITE_APP_MODE !== "production",
});

export default store;
