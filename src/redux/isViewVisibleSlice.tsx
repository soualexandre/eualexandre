import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isComponentView: false,
};

const componentViewSlice = createSlice({
    name: 'isView',
    initialState,
    reducers: {
        componentView: (state, action) => {
            !state.isComponentView;
            state.isComponentView = action.payload;
        },
      
    },
});

export const { componentView } = componentViewSlice.actions;

const viewSlice = componentViewSlice.reducer; 

export default viewSlice; 