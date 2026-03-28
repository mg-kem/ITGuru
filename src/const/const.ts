export const BACKEND_URL = 'https://dummyjson.com';
export const AUTH_TOKEN_KEY_NAME = 'accessToken';
export const REQUEST_TIMEOUT = 5000;

export const APIRoute = {
  LOGIN: '/auth/login',
  PRODUCTS: '/products'
} as const;

export const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  PRODUCTS: '/products',
  NOT_FOUND: '/404',
} as const;