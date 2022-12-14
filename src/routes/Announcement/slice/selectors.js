import { initialState, name } from '.';

import { createSelector } from '@reduxjs/toolkit';

const selectDomain = (state) => state[name] || initialState;

export const selectAnnounce = createSelector([selectDomain], (state) => state.listAnnounce);
