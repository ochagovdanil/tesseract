import { useSelector } from 'react-redux';
import { RootState } from '../../../../shared/model/redux/store';
import { useState } from 'react';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';

export default function SnackbarMessage(): React.ReactElement {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState<boolean>(
		location.state === null ? false : location.state.isAfterLogin // Показываем сообщение приветствия только после входа в аккаунт
	);

	const nickname: string = useSelector(
		(state: RootState) => state.nickname.value
	);

	function handleSnackbarClose(
		_event: React.SyntheticEvent | Event,
		reason?: string
	): void {
		if (reason === 'clickaway') return;

		setIsOpen(false);
	}

	const action = (
		<IconButton
			size='small'
			aria-label='close'
			color='inherit'
			onClick={handleSnackbarClose}
		>
			<CloseIcon fontSize='small' />
		</IconButton>
	);

	return (
		<Snackbar
			open={isOpen}
			autoHideDuration={2_000}
			message={`Добро пожаловать, ${nickname}!`}
			onClose={handleSnackbarClose}
			action={action}
		/>
	);
}
