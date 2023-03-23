import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/Slice/UserSlice";

const rootReducer = combineReducers({
  user: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
