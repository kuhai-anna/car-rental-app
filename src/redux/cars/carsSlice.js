import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const hendlePending = state => {
  state.isLoading = true;
};

const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.message = action.payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, hendlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, hendleRejected);
  },
});

export const carsReducer = carsSlice.reducer;
