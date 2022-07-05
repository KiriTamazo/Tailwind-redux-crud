import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "John", email: "john@gmail.com" },
  { id: "2", name: "Amanda", email: "amanda@gmail.com" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
