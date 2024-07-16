import { AppBar, Avatar, Box, Container, Typography } from '@mui/material';
import logo from '../../../../app/ui/assets/logo.png';
import Profile from '../../../../features/chat/profile/ui/Profile';

export default function Header(): React.ReactElement {
	return (
		<AppBar position='static'>
			<Container sx={{ py: 1 }}>
				<Box
					display='flex'
					justifyContent='space-between'
					alignItems='center'
				>
					<Box display='flex' alignItems='center' gap={1}>
						<Avatar alt='Логотип' src={logo} />
						<Typography
							variant='h6'
							sx={{ display: { md: 'inline', xs: 'none' } }}
						>
							Тессеракт
						</Typography>
					</Box>
					<Profile />
				</Box>
			</Container>
		</AppBar>
	);
}
