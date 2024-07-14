import { Send as SendIcon } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function SendMessage(): React.ReactElement {
	const [message, setMessage] = useState<string>('');

	function sendMessage(): void {
		// Форматируем и проверяем
		const formattedMessage: string = message.trim();

		if (formattedMessage.length !== 0) {
			// Отправляем
			alert(formattedMessage);
		}
	}

	return (
		<Box display='flex' gap={2} sx={{ height: 'max-content', my: 2 }}>
			<TextField
				variant='outlined'
				label='Введите сообщение'
				multiline
				maxRows={4}
				size='small'
				value={message}
				onChange={e => setMessage(e.target.value)}
				sx={{ flex: '1' }}
			/>
			<Button
				variant='contained'
				endIcon={<SendIcon />}
				onClick={sendMessage}
			>
				Отправить
			</Button>
		</Box>
	);
}
