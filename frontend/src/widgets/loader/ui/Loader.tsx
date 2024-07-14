import { Container, LinearProgress, Stack, Typography } from '@mui/material';

export default function Loader(): React.ReactElement {
	return (
		<Container>
			<Stack
				direction='column'
				justifyContent='center'
				sx={{ height: '100vh' }}
			>
				<Typography variant='h6' align='center' sx={{ mb: 2 }}>
					Загрузка страницы
				</Typography>
				<LinearProgress />
			</Stack>
		</Container>
	);
}
