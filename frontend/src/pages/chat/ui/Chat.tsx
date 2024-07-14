/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SnackbarMessage from '../../../features/chat/snackbar/ui/Snackbar';
import Paths from '../../../shared/model/data/paths';
import { RootState } from '../../../shared/model/redux/store';
import Header from '../../../widgets/chat/header/ui/Header';
import MessageHistory from '../../../widgets/chat/message-history/ui/MessageHistory';
import SendMessage from '../../../features/chat/send-message/ui/SendMessage';
import { Box, Container } from '@mui/material';

export default function Chat(): React.ReactElement {
	const navigate = useNavigate();

	const nickname: string = useSelector(
		(state: RootState) => state.nickname.value
	);

	// Если никнейм не существует, то переходим на страницу приветствия
	useEffect(() => {
		if (nickname.length === 0) navigate(Paths.WELCOME);
	}, [nickname]);

	return (
		<>
			<SnackbarMessage />
			<Header />
			<Container>
				<Box
					display='flex'
					flexDirection='column'
					sx={{ height: 'calc(100vh - 72px)' }}
				>
					<MessageHistory />
					<SendMessage />
				</Box>
			</Container>
		</>
	);
}
