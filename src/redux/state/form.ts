import { createSlice } from '@reduxjs/toolkit';
import type { FormState } from '../../models/stateTypes';

export const UserEmptyState: FormState = {
    name: '',
    email: '',
    phoneNumber: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState: UserEmptyState,
  reducers: {
    createUser: (state, action) => action.payload,
    modifyUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => UserEmptyState
  }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
