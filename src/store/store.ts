import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { productsReducer } from './slice/productsSlice';
import { userReducer } from './slice/userSlice';

const api = createAPI();

const rootReducer = combineReducers({
  product: productsReducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});

