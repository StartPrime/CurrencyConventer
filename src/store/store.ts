import { configureStore } from '@reduxjs/toolkit';
import { currencySlice } from './Reducers/Currency.slice.ts';

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
