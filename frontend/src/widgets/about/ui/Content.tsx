import { Box, Container, Typography } from '@mui/material';
import tesseractImage from '../../../app/ui/assets/tesseract.png';

export default function Content(): React.ReactElement {
	return (
		<Container sx={{ py: 4 }}>
			<Typography variant='h5' sx={{ mb: 2 }}>
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
					maxWidth: '100%',
					width: 550,
					display: 'block',
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
			<Typography variant='body1'>
				В будущем данный продукт можно развить на всеобщее использование
				физиками. Для этого необходимо будет добавить возможность
				прикрепления медиа-файлов, markdown форматирования. Можно
				добавить несколько каналов в одном чате, чтобы разделить общую
				тему физики на несколько узкоспециализированных областей
				(квантовая физика, классическая механика и пр.). Не стоит
				забывать и про групповые видео звонки. Также необходимо будет
				добавить возможность редактирования и удаления сообщений.
				Кроссплатформенное мобильное приложение повысит охват аудитории,
				а сбор статистики и правильная интерпретация этих данных
				позволят сделать продукт еще более удобным и привлекательным к
				использованию. Но самое главное без чего данное развитие
				продукта не может быть осуществимо - наличие самих физиков,
				которые будут помогать в разработке продукта, советовать какие
				идеи и функции нужны приложению с точки зрения удобства конечных
				пользователей, а также они будут выполнять функции модератора в
				чате (удалять нерелевантные или псевдонаучные сообщения,
				помогать в обсуждении каких-либо проблем и т.д.).
			</Typography>
		</Container>
	);
}
