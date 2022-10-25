import { createSlice } from '@reduxjs/toolkit';

const filterInitialSate = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSate,
  reducers: {
    setFilterQuery: (state, action) => {},
  },
});

export const { setFilterQuery } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
