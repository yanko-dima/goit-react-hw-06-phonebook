import { createSlice } from '@reduxjs/toolkit';

const filterInitialSate = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSate,
  reducers: {
    changeFilter: (state, action) => {
      console.log(state);
      console.log(action.payload);

      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
export const getFilterQuery = state => state.filter;
