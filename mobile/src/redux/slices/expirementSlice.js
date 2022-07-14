import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {REDIRECT_MESSAGE, SCREEN_B, SCREEN_D} from '../../constants/strings';
import {APP_URL} from '@env';
import axios from 'axios';

export const rFetchExpirements = createAsyncThunk(
  'expirements/get',
  async () => {
    await axios({
      method: 'get',
      url: `${APP_URL}/rFetchExperiments`,
    });
  },
);

const expirementSlice = createSlice({
  name: 'expirementSlice',
  initialState: {
    nextScreen: '',
    message: '',
    err: false,
    loading: false,
  },

  reducers: {
    resetScreenAState(state) {
      state.err = false;
      state.message = '';
      state.nextScreen = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(rFetchExpirements.pending, state => {
      state.loading = true;
    });
    builder.addCase(rFetchExpirements.fulfilled, state => {
      state.loading = false;
      state.nextScreen = SCREEN_B;
    });
    builder.addCase(rFetchExpirements.rejected, state => {
      state.loading = false;
      state.err = true;
      state.message = REDIRECT_MESSAGE;
      state.nextScreen = SCREEN_D;
    });
  },
});

export const expirementReducer = expirementSlice.reducer;
export const {resetScreenAState} = expirementSlice.actions;
