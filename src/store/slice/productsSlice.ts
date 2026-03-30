import { createSlice } from '@reduxjs/toolkit';
import type { IProduct } from '../../types/types';
import { fetchProductsAction } from '../thunk/productsThunk';

interface IProductState {
  products: IProduct[];
  searchQuery: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: IProductState = {
  products: [],
  searchQuery: null,
  loading: false,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:
    (builder) =>
      builder.addCase(fetchProductsAction.pending, (state) => {
        state.loading = true;
      })
        .addCase(fetchProductsAction.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload.products;
        })
        .addCase(fetchProductsAction.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message ?? 'Не удалось загрузить данные';
        })
})

export const productsReducer = productsSlice.reducer;