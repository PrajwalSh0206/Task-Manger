// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import popupReducer from './popupReducer'; // Import your individual reducers

const rootReducer = combineReducers({
    popup: popupReducer,
    // Add more reducers as needed
});

export default rootReducer;
