import { createSlice } from '@reduxjs/toolkit';
import { loginAsyncAction } from '../thunk/userThunk';


interface IAuthState {
  isAuth: boolean;
  firstName: string | null;
  lastName: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  isAuth: false,
  firstName: null,
  lastName: null,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers:
    (builder) =>
      builder
        .addCase(loginAsyncAction.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginAsyncAction.fulfilled, (state, action) => {
          state.loading = false;
          state.isAuth = true;
          state.firstName = action.payload.firstName;
          state.lastName = action.payload.lastName;
        })
        .addCase(loginAsyncAction.rejected, (state, action) => {
          state.loading = false;
          state.isAuth = false;
          state.error = action.payload?.message ?? 'Ошибка обращения к серверу';
        })
})

export const userReducer = userSlice.reducer;