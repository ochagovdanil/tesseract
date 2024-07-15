import { Avatar, Box, Card, Paper, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useEffect, useRef, useState } from 'react';
import Message from '../../../../entities/Message';
import useWebSocket from 'react-use-websocket';

export default function MessageHistory(): React.ReactElement {
	const [messageHistory, setMessageHistory] = useState<Message[]>([]);

	const endRef = useRef<HTMLDivElement | null>(null); // Последние новые сообщения, используется для прокрутки к ним

	// Загружаем список всех сообщений из PostgreSQL
	useEffect(() => {
		fetch('http://localhost:8080/messages')
			.then(response => response.json())
			.then(data => {
				setMessageHistory(data);
			});
	}, []);

	// Парсим сообщения от WebSockets и заносим его в историю сообщений
	useWebSocket('ws://localhost:8080', {
		onMessage: async event => {
			const text = await event.data.text();
			const newMessage: Message = JSON.parse(text);
			setMessageHistory((prev: Message[]) => [...prev, newMessage]);
		},
	});

	// Если пришло новое сообщение то скролим вниз
	useEffect(() => {
		endRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messageHistory]);

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
			{messageHistory.map(
				({ nickname, message, dateandtime }, index: number) => (
					<Paper
						key={index}
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
							<Typography
								variant='caption'
								sx={{ alignSelf: 'end' }}
							>
								{dateandtime}
							</Typography>
						</Box>
					</Paper>
				)
			)}
			<div ref={endRef}></div>
		</Card>
	);
}
