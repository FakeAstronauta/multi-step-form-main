import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './state/form';
import { planSlice } from './state/plan';
import { addOnsSlice } from './state/addOns';
import type {Store} from './../models/stateTypes';

export default configureStore<Store>({
  reducer: {
    user: userSlice.reducer,
    plan: planSlice.reducer,
    addOns: addOnsSlice.reducer,
  }
});
