import { Box, Container, Typography } from '@mui/material';
import tesseractImage from '../../../app/ui/assets/tesseract.png';

export default function Content(): React.ReactElement {
	return (
		<Container>
			<Typography variant='h5' sx={{ mt: 4, mb: 2 }}>
				Цель данного веб сайта
			</Typography>
			<Typography variant='body1'>
				Тессеракт задумывался как простой онлайн чат, где каждый
				пользователь, задав себе никнейм, может погрузиться в настоящую
				онлайн комнату физиков, задать интересующие его вопросы по теме
				и узнать что-то новое.
			</Typography>

			<Typography variant='h5' sx={{ mt: 6, mb: 2 }}>
				Почему именно такое название?
			</Typography>
			<Typography variant='body1'>
				Название "Тессеракт" было взято из известного и любимого
				физиками фильма Кристофера Нолана - "Интерстеллар".
			</Typography>
			<Typography sx={{ my: 2 }}>
				Кип Торн, физик-теоретик, ввел в фильм понятие "тессеракт". Это
				четырехмерный гиперкуб, аналог трехмерного куба в четырехмерном
				пространстве.
			</Typography>
			<Box
				component='img'
				sx={{
					height: 350,
				}}
				alt='Тессеракт в Интерстеллар'
				src={tesseractImage}
			/>
			<Typography sx={{ my: 2 }}>
				С его помощью главный герой фильма, Купер, наблюдал различные
				моменты своей жизни по временной оси пространства-времени.
				Аналогично, веб-чат "Тессеракт" позволяет просматривать
				различные сообщения участников беседы по временной шкале.
			</Typography>

			<Typography variant='h5' sx={{ mt: 4, mb: 2 }}>
				Дальнейшее развитие проекта
			</Typography>
			<Typography variant='body1'>TODO: write here over time!</Typography>
		</Container>
	);
}
