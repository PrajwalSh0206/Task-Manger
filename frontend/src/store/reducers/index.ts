// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import popupReducer from './popupReducer'; // Import your individual reducers
import taskReducer from './taskReducer';
import snackBarReducer from './snackBarReducer';

const rootReducer = combineReducers({
  popup: popupReducer,
  task: taskReducer,
  snackbar: snackBarReducer
  // Add more reducers as needed
});

export default rootReducer;
