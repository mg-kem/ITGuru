import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, State } from '../../types/types.state';
import type { AxiosInstance } from 'axios';
import type { IProduct } from '../../types/types';
import { APIRoute } from '../../const/const';

export type TProductsResponse = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
};

export const fetchProductsAction = createAsyncThunk<TProductsResponse, void, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'fetchProducts',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TProductsResponse>(APIRoute.PRODUCTS);
    return data;
  }
)