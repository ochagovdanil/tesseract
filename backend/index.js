require('dotenv').config();

const express = require('express');
const cors = require('cors');
const http = require('http');
const WebSocket = require('ws');
const { Pool } = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'tesseract',
	password: '123qazplm123',
	port: 5432,
});
// CREATE TABLE messages (
//   id SERIAL PRIMARY KEY,
//   nickname VARCHAR(255),
//   message TEXT,
//   dateAndTime VARCHAR(255)
// );

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Соединение установлено
wss.on('connection', ws => {
	console.log('WebSockets connection established!');

	// Новое сообщение
	ws.on('message', async message => {
		console.log('WebSockets got a new message:', message);

		// Вставляем новое сообщение в PostgreSQL
		const { nickname, message: msg, dateandtime } = JSON.parse(message);

		await pool.query(
			'INSERT INTO messages (nickname, message, dateandtime) VALUES ($1, $2, $3)',
			[nickname, msg, dateandtime]
		);

		// Отправляем новое сообщение всем
		wss.clients.forEach(client => {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(message);
			}
		});
	});

	// Соединение закрыто
	ws.on('close', () => {
		console.log('WebSockets connection closed!');
	});
});

// Отправляем клиенту список всех сообщений чата
app.get('/messages', async (req, res) => {
	const results = await pool.query(
		'SELECT * FROM messages ORDER BY dateandtime ASC'
	);
	res.json(results.rows);
});

app.get('*', (req, res) => {
	res.send(404).json({ error: 'The requested page not found!' });
});

app.use((err, req, res, next) => {
	res.status(500).json({ error: 'Internal Server Error Occurred!' });
});

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

server.listen(PORT, () => {
	console.log(`Server started on ${HOST}:${PORT}`);
});
