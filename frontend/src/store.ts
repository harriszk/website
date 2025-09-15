import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import blogSlice from './projects/blog/blogSlice.ts';
import api from './api.ts';

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
        blog: blogSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger).concat(api.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;