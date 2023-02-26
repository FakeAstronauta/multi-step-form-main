import { createSlice } from '@reduxjs/toolkit';
import type { addOnsState } from '../../models/stateTypes';

export const addOnsEmptyState: addOnsState = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false
};

export const addOnsSlice = createSlice({
  name: 'addOns',
  initialState: addOnsEmptyState,
  reducers: {
    modifyAddOn: (state, action) => ({ ...state, ...action.payload }),
  }
});

export const { modifyAddOn } = addOnsSlice.actions;

export default addOnsSlice.reducer;
