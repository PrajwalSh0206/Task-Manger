// reducers/counterReducer.ts
import { createSlice } from '@reduxjs/toolkit';

interface PopupState {
  value: boolean;
}

const initialState: PopupState = {
  value: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = !state.value;
    },
  },
});

export const { changeState } = popupSlice.actions;
export default popupSlice.reducer;
