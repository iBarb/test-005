import { configureStore } from "@reduxjs/toolkit";
import ratesReducer from "../features/rates/ratesSlice";

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
