import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { feedbacksReducer } from "./userfeedbacks";

export const store = configureStore({
  reducer: { // reducer orqali biza bozorimizni har hil otdellarga bo'lshimiz mumkin
    userfeedbacks: feedbacksReducer,
    user: userReducer,
  }
})