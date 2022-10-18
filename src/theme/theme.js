import { createSelector, createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isDarkMode: false,
};

export const name = 'theme';

export const slice = createSlice({
    name,
    initialState,
    reducers: {
        changeMode: (state, action) => {
            state.isDarkMode = action.payload;
        },
    },
});

export const themes = {
    dark: `${process.env.PUBLIC_URL}/antd/antd.dark.min.css`,
    light: `${process.env.PUBLIC_URL}/antd/antd.min.css`,
    colors: {
        primary: '#45CE7C',
        neutral5: '#D9D9D9',
        primary400: '#45CE7C',
        danger: '#FF4D4F',
        calendulaGold: '#FFC53D',
    },
};

const selectDomain = (state) => state[name] || initialState;

export const selectIsDarkMode = createSelector([selectDomain], (state) => state.isDarkMode);

export const { actions } = slice;

export default slice;
