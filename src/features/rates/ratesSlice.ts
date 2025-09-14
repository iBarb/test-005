import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Rates } from "./types";


interface RatesState extends Rates {
  loading: boolean;
  error: string | null;
}

const initialState: RatesState = {
  purchase_price: 0,
  sale_price: 0,
  loading: true,
  error: null,
};

const ratesSlice = createSlice({
  name: "rates",
  initialState,
  reducers: {
    setRates: (state, action: PayloadAction<Rates>) => {
      state.purchase_price = action.payload.purchase_price;
      state.sale_price = action.payload.sale_price;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setRates, setError } = ratesSlice.actions;
export default ratesSlice.reducer;
