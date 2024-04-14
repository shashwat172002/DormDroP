import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentRecSideSender: null,
};

const recSideSenderSlice = createSlice({
  name: 'RECSIDESENDER',
  initialState,
  reducers: {
    theRecSideSender: (state, action) => {
      state.currentRecSideSender = action.payload;
    },
  },
});

export const { theRecSideSender} = recSideSenderSlice.actions;

export default recSideSenderSlice.reducer;