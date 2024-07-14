import { ArrowBack } from '@mui/icons-material';
import { AppBar, Box, Container, IconButton, Typography } from '@mui/material';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

interface AppBarBackButtonArgumentsType {
	previousUrl: string;
}

const AppBarBackButton = memo(
	({ previousUrl }: AppBarBackButtonArgumentsType): React.ReactElement => {
		const navigate = useNavigate();

		// Вернуться на страницу назад
		function handleBackClick(): void {
			navigate(previousUrl);
		}

		return (
			<AppBar position='sticky'>
				<Container sx={{ py: 2 }}>
					<Box
						display='flex'
						justifyContent='start'
						alignItems='center'
					>
						<IconButton color='inherit' onClick={handleBackClick}>
							<ArrowBack />
						</IconButton>
						<Typography variant='body1'>Вернуться назад</Typography>
					</Box>
				</Container>
			</AppBar>
		);
	}
);

export default AppBarBackButton;
