import { createSlice } from "@reduxjs/toolkit";

// bozorga Reducer oqali ulab qo'yiladi
// createSlice bizaga qaytaradigan narsalarni ichidan bizaga actions bilan reducers kerak bo'ladi va ularni destruction qilib olamiz
export const { actions: feedbacksActions, reducer: feedbacksReducer } =
  createSlice({
    // biza hozir bu yerda bitta otdel yasab oldik, createSlice ni ichida parametr sifatida obyekt'ni berib yuboryabmiz
    name: "userfeedbacks", // bozorimizni nomi
    initialState: {
      // state'larimizni boshlang'ich qiymati qanday bo'lishini yozamiz, bu yerda bir nechta state'larni beymalol yozib ketishimiz mumkin, useState'larsiz
      loading: false,
      error: null, // setFeedbacks'ni fetch qilayotgan payitimiz qandaydir error bo'ladigan bo'lsa shu error'ga kelib tushadi
      userfeedbacks: null,
    },
    reducers: {
      // state'larimizni o'zgartiradigan funktsyalani biza shu reducers'ga yozamiz
      setLoading: (state) => {
        // actionni o'z ichida payloadni oladim shunda destructure qilindi
        state.loading = true;
      },
      setFeedbacks: (state, { payload }) => {
        state.loading = false;
        // obyektni ichidagi funktsiya metod deyiladi. Bu reducer'imiz (funktsiya) o'z ichiga 2ta narsani ololidi: state va action, va bu narsalar Reduxni o'zidan chiqadi.
        state.userfeedbacks = payload; // payload reddux tomonidan qo'yilgan narsa, biza uni o'zgartira olmaymiz
      },
      setError: (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      },
      deleteFeedbacksItem: (state, { payload }) => {
        // actionni payloadiga id keladi
        const deletingItemIndex = state.userfeedbacks.findIndex(
          (feedbacksItem) => feedbacksItem.id === +payload
        );
        state.userfeedbacks = [
          ...state.userfeedbacks.slice(0, deletingItemIndex),
          ...state.userfeedbacks.slice(deletingItemIndex + 1),
        ];
      },
      addFeedbacksItem: (state, { payload }) => {
        if (state.userfeedbacks) {
          state.userfeedbacks = [...state.userfeedbacks, payload];
        }
      },
      editFeedbacksItem: (state, { payload }) => {
        const userfeedbacks = state.userfeedbacks;
        if (userfeedbacks) {
          const editedItemIndex = userfeedbacks.findIndex(
            (feedbackItem) => feedbackItem.id === payload.id
          );
          state.userfeedbacks = [
            ...userfeedbacks.slice(0, editedItemIndex),
            payload,
            ...userfeedbacks.slice(editedItemIndex + 1),
          ];
        }
      },
    },
  });
