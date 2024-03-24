// reducers/counterReducer.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { taskDto } from '../../../dto/task.dto';

interface taskInitialDto {
  all: Array<taskDto>;
  important: Array<taskDto>;
  completed: Array<taskDto>;
}

const initialState: taskInitialDto = {
  all: [],
  important: [],
  completed: [],
};

const popupSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTask: (state, actions: PayloadAction<Array<taskDto>>) => {
      const tasks = actions.payload;
      state.all = tasks;
      state.completed = tasks.filter((value) => {
        return value.completed;
      });
      state.important = tasks.filter((value) => {
        return value.important;
      });
    },
  },
});

export const { updateTask } = popupSlice.actions;
export default popupSlice.reducer;
