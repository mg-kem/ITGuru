import { createAsyncThunk } from '@reduxjs/toolkit'
import type { AxiosInstance } from 'axios';
import { APIRoute } from '../../const/const';
import axios from 'axios';

interface IUserData {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

interface IAuthData {
  username: string;
  password: string;
  rememberMe: boolean;
}

interface IErrorResponse {
  message: string;
}

export const loginAsyncAction = createAsyncThunk<
  IUserData,
  IAuthData,
  { extra: AxiosInstance, rejectValue: IErrorResponse }
>(
  'user/login',
  async ({ username, password, rememberMe }, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<IUserData>(APIRoute.LOGIN, { username, password });
      const { accessToken, refreshToken } = data;
      const storage = rememberMe ? localStorage : sessionStorage;
      const fallback = rememberMe ? sessionStorage : localStorage;
      fallback.removeItem('accessToken');
      fallback.removeItem('refreshToken');
      storage.setItem('accessToken', accessToken);
      storage.setItem('refreshToken', refreshToken);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data as IErrorResponse);
      }
      return rejectWithValue({ message: 'Неизвестная ошибка' });
    }
  }
)