/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Login from '../../../features/login/ui/Login';
import Paths from '../../../shared/model/data/paths';
import { RootState } from '../../../shared/model/redux/store';
import Header from '../../../widgets/welcome/ui/Header';

export default function Welcome(): React.ReactElement {
	const navigate = useNavigate();

	const nickname: string = useSelector(
		(state: RootState) => state.nickname.value
	);

	// Если никнейм уже существует, то переходим с этой страницы в чат
	useEffect(() => {
		if (nickname.length !== 0)
			navigate(Paths.CHAT, {
				state: {
					isAfterLogin: false,
				},
			});
	}, [nickname]);

	return (
		<Container>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				sx={{ height: '100vh' }}
			>
				<Header />
				<Login />
			</Box>
		</Container>
	);
}
