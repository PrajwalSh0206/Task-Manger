// reducers/counterReducer.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getTaskDto } from '../../../dto/task.dto';

interface taskInitialDto {
  all: Array<getTaskDto>;
  important: Array<getTaskDto>;
  pending: Array<getTaskDto>;
  completed: Array<getTaskDto>;
}

const initialState: taskInitialDto = {
  all: [],
  important: [],
  completed: [],
  pending:[]
};

const popupSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    updateTask: (state, actions: PayloadAction<Array<getTaskDto>>) => {
      const tasks = actions.payload;
      state.all = tasks;
      state.completed = tasks.filter((value) => {
        return value.completed;
      });
      state.important = tasks.filter((value) => {
        return value.important;
      });
      state.pending = tasks.filter((value) => {
        return value.important && !value.completed;
      });
    },
  },
});

export const { updateTask } = popupSlice.actions;
export default popupSlice.reducer;
