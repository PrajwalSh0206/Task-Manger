// reducers/counterReducer.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type snackBarTypeDto = 'success' | 'failure';

interface SnackBarMessageDto {
  toastType: snackBarTypeDto;
  toastMessage: string;
}

interface SnackBarState extends SnackBarMessageDto {
  enableToast: boolean;
}

const initialState: SnackBarState = {
  toastType: 'success',
  toastMessage: '',
  enableToast: false,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    disableToast: (state) => {
      state.enableToast = !state.enableToast;
    },
    enableToast: (state, actions: PayloadAction<SnackBarMessageDto>) => {
      state.enableToast = true;
      state.toastMessage = actions.payload.toastMessage;
      state.toastType = actions.payload.toastType;
    },
  },
});

export const { disableToast, enableToast } = snackbarSlice.actions;
export default snackbarSlice.reducer;
