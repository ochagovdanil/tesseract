import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNickname } from '../../../shared/model/redux/slices/nickname';
import { AppDispatch } from '../../../shared/model/redux/store';
import { useNavigate } from 'react-router-dom';
import Paths from '../../../shared/model/data/paths';

export default function Login(): React.ReactElement {
	const [inputNickname, setInputNickname] =
		useState<string>('Любопытный физик'); // никнейм в поле ввода
	const navigate = useNavigate();

	const dispatch = useDispatch<AppDispatch>();

	// Устанавливаем новый никнейм для Redux
	function handleSubmitClick(): void {
		if (inputNickname.length !== 0) {
			dispatch(setNickname(inputNickname.trim()));
			navigate(Paths.CHAT, {
				state: {
					isAfterLogin: true,
				},
			});
		}
	}

	return (
		<Box
			display='flex'
			justifyContent='center'
			alignItems='center'
			gap={2}
			sx={{ mt: 4 }}
		>
			<TextField
				label='Введите ваш никнейм'
				variant='standard'
				value={inputNickname}
				onChange={e => setInputNickname(e.target.value)}
				required
				error={inputNickname.length === 0}
				sx={{ width: '18rem' }}
			/>
			<Button variant='contained' onClick={handleSubmitClick}>
				Присоединиться
			</Button>
		</Box>
	);
}
