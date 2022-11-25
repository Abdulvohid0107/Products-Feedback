import { createSlice } from "@reduxjs/toolkit";

export const {actions: userActions, reducer: userReducer} = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setuser: (state, { payload }) => {
      state.user = payload
    },
  },
});
