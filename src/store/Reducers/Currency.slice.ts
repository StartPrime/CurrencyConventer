import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CurrencyPayload {
  firstValue: string;
  secondValue: string;
}

export const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    firstValue: '',
    secondValue: '',
  },
  reducers: {
    setValue: (state, action: PayloadAction<CurrencyPayload>) => {
      const { firstValue, secondValue } = action.payload;
      state.firstValue = firstValue;
      state.secondValue = secondValue;
    },
  },
});

export const { setValue } = currencySlice.actions;
export default currencySlice.reducer;
