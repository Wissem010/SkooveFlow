import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RETRY_MESSAGE, SCREEN_D} from '../../constants/strings';
import {APP_URL} from "@env"
import axios from 'axios';

export const rSubmitSelection = createAsyncThunk(
  'selection/submit',
  async () => {
    await axios({
      method: 'get',
      url: `${APP_URL}/rSubmitSelection`,
    });
  },
);

const selectionSlice = createSlice({
  name: 'selectionSlice',
  initialState: {loading: false, message: '', err: false, nextScreen: ''},

  reducers: {
    resetScreenBState(state) {
      state.message = '';
      state.err = false;
      state.nextScreen = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(rSubmitSelection.pending, state => {
      state.loading = true;
    });
    builder.addCase(rSubmitSelection.rejected, state => {
      state.loading = false;
      state.message = RETRY_MESSAGE;
      state.err = true;
    });
    builder.addCase(rSubmitSelection.fulfilled, state => {
      state.loading = false;
      state.nextScreen = SCREEN_D;
    });
  },
});

export const selectionReducer = selectionSlice.reducer;
export const {resetScreenBState} = selectionSlice.actions;
