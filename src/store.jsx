
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./feature/users/UserSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
