import { configureStore } from '@reduxjs/toolkit';
import viewSlice from './isViewVisibleSlice'

const store = configureStore({
  reducer: viewSlice,
});

export default store;