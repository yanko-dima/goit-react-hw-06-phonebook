import { createSlice } from '@reduxjs/toolkit';

const filterInitialSate = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialSate,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = `${state.filter}${action.payload}`;
      console.log(state.filter);
      return state.map(
        contact =>
          contact.name.inqlude(contact.filter) ||
          contact.number.inqlude(contact.filter)
      );
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
