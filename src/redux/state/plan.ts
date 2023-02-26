import { createSlice } from '@reduxjs/toolkit';
import type { plansState } from '../../models/stateTypes';

export const planEmptyState: plansState = {
    cardIndex: 0,
    plan: 'Arcade',
    price: 9,
    toggleState: false
}

export const planSlice = createSlice({
    name: 'plan',
    initialState: planEmptyState,
    reducers: {
        updatePlan: (state, action) => ({...state, ...action.payload}),
    }
})

export const { updatePlan } = planSlice.actions;

export default planSlice.reducer;
