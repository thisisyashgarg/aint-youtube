import { configureStore } from "@reduxjs/toolkit";
import { appSliceReducer } from "./AppSLice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
