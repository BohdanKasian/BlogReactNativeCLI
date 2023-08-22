import { createSlice } from "@reduxjs/toolkit";
import { AllCartsType } from "../../../types/allCarts";

const allCartsSlice = createSlice({
  name: "allCarts",
  initialState: {
    carts: [] as AllCartsType,
  },
  reducers: {},
});
export const {} = allCartsSlice.actions;
export default allCartsSlice.reducer;
