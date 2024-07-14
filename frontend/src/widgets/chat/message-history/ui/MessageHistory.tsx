import { Avatar, Box, Card, Paper, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

const messages = [
	{
		id: 1,
		message: 'Привет! Я Данил.',
		nickname: 'Данил Очагов',
		dateAndTime: '07/14/24 9:04 PM',
	},
	{
		id: 2,
		message: 'Привет! Я Ваня.',
		nickname: 'Ваня',
		dateAndTime: '07/14/24 9:05 PM',
	},
	{
		id: 3,
		message: 'Ку всем!',
		nickname: 'Любопытный физик',
		dateAndTime: '07/14/24 9:09 PM',
	},
	{
		id: 4,
		message: 'Привет! Я Данил.',
		nickname: 'Данил Очагов',
		dateAndTime: '07/14/24 9:04 PM',
	},
	{
		id: 5,
		message: 'Привет! Я Ваня.',
		nickname: 'Ваня',
		dateAndTime: '07/14/24 9:05 PM',
	},
	{
		id: 6,
		message: 'Ку всем!',
		nickname: 'Любопытный физик',
		dateAndTime: '07/14/24 9:09 PM',
	},
];

export default function MessageHistory(): React.ReactElement {
	return (
		<Card
			variant='outlined'
			sx={{
				flex: '1',
				overflowY: 'auto',
				mt: 3,
				display: 'flex',
				flexDirection: 'column',
				gap: 4,
				py: 4,
			}}
		>
			{messages.map(({ id, message, nickname, dateAndTime }) => (
				<Paper
					key={id}
					elevation={2}
					sx={{
						mx: 6,
						p: 2,
					}}
				>
					<Box
						display='flex'
						flexDirection='column'
						alignItems='start'
					>
						<Box
							display='flex'
							alignItems='center'
							gap={1}
							sx={{ mb: 2 }}
						>
							<Avatar
								alt='Никнейм'
								sx={{
									bgcolor: deepPurple[500],
								}}
							>
								{nickname.split(' ')[0][0]}
								{nickname.split(' ').length > 1 &&
									nickname.split(' ')[1][0]}
							</Avatar>
							<Typography variant='h6'>{nickname}</Typography>
						</Box>
						<Typography variant='body1'>{message}</Typography>
						<Typography variant='caption' sx={{ alignSelf: 'end' }}>
							{dateAndTime}
						</Typography>
					</Box>
				</Paper>
			))}
		</Card>
	);
}
