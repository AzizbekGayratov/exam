import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import watchlistReducer from "./watchlistSlice";

const store = configureStore({
  reducer: {
    project: projectReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
