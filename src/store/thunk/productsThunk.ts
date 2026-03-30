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

export const fetchProductsAction = createAsyncThunk<TProductsResponse, string, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>(
  'fetchProducts',
  async (query, { extra: api }) => {
    const url = query ? `${APIRoute.PRODUCTS}/search` : APIRoute.PRODUCTS
    const { data } = await api.get<TProductsResponse>(url, { params: query ? { q: query } : {} });
    return data;
  }
)