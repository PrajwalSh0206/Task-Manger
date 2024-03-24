// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import popupReducer from './popupReducer'; // Import your individual reducers
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  popup: popupReducer,
  task: taskReducer,
  // Add more reducers as needed
});

export default rootReducer;
