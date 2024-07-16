import { Send as SendIcon } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { KeyboardEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import useWebSocket from 'react-use-websocket';
import Message from '../../../../entities/Message';
import { RootState } from '../../../../shared/model/redux/store';

export default function SendMessage(): React.ReactElement {
	const [message, setMessage] = useState<string>('');

	const nickname: string = useSelector(
		(state: RootState) => state.nickname.value
	);

	const { sendMessage } = useWebSocket('ws://localhost:8080');

	// При нажатии на 'Enter' отправляем сообщение
	function handleKeyDownPress(event: KeyboardEvent<HTMLInputElement>): void {
		if (event.key === 'Enter') validateAndSendMessage();
	}

	function validateAndSendMessage(): void {
		// Форматируем и проверяем
		const formattedMessage: string = message.trim();

		if (formattedMessage.length !== 0) {
			// Отправляем сообщение по WebSockets
			const webSocketMessage: Message = {
				nickname,
				message: formattedMessage,
				dateandtime: new Date().toLocaleString(),
			};

			sendMessage(JSON.stringify(webSocketMessage));
			setMessage('');
		}
	}

	return (
		<Box
			display='flex'
			flexWrap='wrap'
			gap={2}
			sx={{ height: 'max-content', my: 2 }}
		>
			<TextField
				variant='outlined'
				label='Введите сообщение'
				size='small'
				value={message}
				onChange={e => setMessage(e.target.value)}
				onKeyDown={handleKeyDownPress}
				sx={{ flex: { sm: '1', xs: 'auto' } }}
			/>
			<Button
				variant='contained'
				endIcon={<SendIcon />}
				sx={{ width: { sm: 'auto', xs: '100%' } }}
				onClick={validateAndSendMessage}
			>
				Отправить
			</Button>
		</Box>
	);
}
