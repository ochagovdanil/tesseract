import { configureStore } from '@reduxjs/toolkit';
import nicknameSlice from './slices/nickname';

export const store = configureStore({
	reducer: {
		nickname: nicknameSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
