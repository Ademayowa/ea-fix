import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import trainerService from './trainerService';

const initialState = {
  trainer: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Get trainer profile
export const getTrainer = createAsyncThunk(
  'trainer/getProfile',
  async (_, thunkAPI) => {
    try {
      // Get user token
      const token = thunkAPI.getState().auth.user.data.token;

      return await trainerService.getTrainer(token);
    } catch (error) {
      // Get error message from backend
      const message = error.response.data.message || error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const trainerSlice = createSlice({
  name: 'trainer',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrainer.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getTrainer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.trainer = action.payload;
      })

      .addCase(getTrainer.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = trainerSlice.actions;
export default trainerSlice.reducer;
