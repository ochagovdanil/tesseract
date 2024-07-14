import { Avatar, Box, Button, Typography } from '@mui/material';
import Paths from '../../../shared/model/data/paths';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../../app/ui/assets/logo.png';

export default function Header(): React.ReactElement {
	return (
		<>
			<Box display='flex' justifyContent='center'>
				<Avatar alt='Логотип' src={logo} />
			</Box>
			<Typography variant='h6' sx={{ py: 3 }} align='center'>
				Тессеракт - онлайн веб чат для людей, которые любят физику
			</Typography>
			<Typography variant='body1' align='center'>
				Отныне вы сможете прикоснуться к святой граали заветной и всеми
				любимой Вами науки. Общайтесь с другими людьми, обменивайтесь
				опытом, получайте новые знания - все это и многое другое в нашем
				веб чате.
			</Typography>
			<Button
				variant='text'
				sx={{ mt: 2 }}
				component={RouterLink}
				to={Paths.ABOUT}
			>
				Немного информации о нас
			</Button>
		</>
	);
}
