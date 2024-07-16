import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

import cors from 'cors';
import http from 'http';
import WebSocket from 'ws';
import { Pool, QueryResult } from 'pg';
import Message from './types/Message';

// Подключаем PostgreSQL
const pool: Pool = new Pool({
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

// Подготовка WebSocket сервера
const app: Express = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Соединение установлено
wss.on('connection', (ws: WebSocket) => {
	console.log('WebSockets connection established!');

	// Новое сообщение
	ws.on('message', async (message: WebSocket.RawData) => {
		console.log('WebSockets got a new message:', message);

		// Вставляем новое сообщение в PostgreSQL
		const {
			nickname,
			message: msg,
			dateandtime,
		} = JSON.parse(message.toString());

		await pool.query(
			'INSERT INTO messages (nickname, message, dateandtime) VALUES ($1, $2, $3)',
			[nickname, msg, dateandtime]
		);

		// Отправляем новое сообщение всем
		wss.clients.forEach((client: WebSocket) => {
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
app.get('/messages', async (_req: Request, res: Response) => {
	const results: QueryResult<Message> = await pool.query(
		'SELECT * FROM messages ORDER BY dateandtime ASC'
	);
	res.json(results.rows);
});

// Обрабатываем 404 ошибку
app.get('*', (_req: Request, res: Response) => {
	res.send(404).json({ error: 'The requested page not found!' });
});

// Обрабатываем 500 ошибку сервера
app.use((_err: Error, _req: Request, res: Response, _next: NextFunction) => {
	res.status(500).json({ error: 'Internal Server Error Occurred!' });
});

// ЗАпускаем сервер
const PORT: number = Number(process.env.PORT) || 8080;
const HOST: string = process.env.HOST || 'localhost';

server.listen(PORT, () => {
	console.log(`Server started on ${HOST}:${PORT}`);
});
