import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NicknameStateType {
	value: string;
}

const initialState: NicknameStateType = {
	value: '',
};

// Просто хранит имя текущего пользователя в чате
const nicknameSlice = createSlice({
	name: 'nickname',
	initialState,
	reducers: {
		setNickname(state: NicknameStateType, action: PayloadAction<string>) {
			state.value = action.payload;
		},
		removeNickname(state: NicknameStateType) {
			state.value = '';
		},
	},
});

export default nicknameSlice.reducer;

export const { setNickname, removeNickname } = nicknameSlice.actions;
