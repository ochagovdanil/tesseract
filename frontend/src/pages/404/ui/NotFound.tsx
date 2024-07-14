import { Box, Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Paths from '../../../shared/model/data/paths';

export default function NotFound(): React.ReactElement {
	return (
		<Container>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='center'
				sx={{ height: '100vh' }}
			>
				<Typography variant='h3'>Страница не найдена!</Typography>
				<Link to={Paths.WELCOME} component={RouterLink} sx={{ mt: 2 }}>
					Перейти на главную?
				</Link>
			</Box>
		</Container>
	);
}
