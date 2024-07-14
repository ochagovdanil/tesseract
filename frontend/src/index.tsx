import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './app/model/routes';
import Loader from './widgets/loader/ui/Loader';
import { CssBaseline } from '@mui/material';
import ReduxProvider from './shared/ui/ReduxProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<CssBaseline>
			<ReduxProvider>
				<BrowserRouter>
					<Routes>
						{routes.map(({ path, element }) => (
							<Route
								key={path}
								path={path}
								element={
									<Suspense fallback={<Loader />}>
										{element()}
									</Suspense>
								}
							/>
						))}
					</Routes>
				</BrowserRouter>
			</ReduxProvider>
		</CssBaseline>
	</React.StrictMode>
);
