/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AnyAction, CombinedState, combineReducers, configureStore } from "@reduxjs/toolkit";
import allCarts from "./reducers/allCarts";
import { AllCartsType } from "../../types/allCarts";

const combinedReducer = combineReducers({
  allCarts: allCarts,
});

const rootReducer = (
  state:
    | CombinedState<{
        allCarts: { carts: AllCartsType };
      }>
    | undefined,
  action: AnyAction
) => {
  if (action.type === "user/logOut") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  // @ts-ignore
  reducer: rootReducer,
  // @ts-ignore
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppRootState = ReturnType<typeof store.getState>;
