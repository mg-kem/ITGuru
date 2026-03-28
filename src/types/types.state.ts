import { store } from '../store/store';

export type State = ReturnType<typeof store.getState> // тип состояния приложения
export type AppDispatch = typeof store.dispatch // тип для dispatch