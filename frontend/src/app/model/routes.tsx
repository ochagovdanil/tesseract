import Paths from '../../shared/model/data/paths';
import { lazy } from 'react';

const NotFound = lazy(() => import('../../pages/404/ui/NotFound'));
const Welcome = lazy(() => import('../../pages/welcome/ui/Welcome'));
const Chat = lazy(() => import('../../pages/chat/ui/Chat'));
const Rules = lazy(() => import('../../pages/rules/ui/Rules'));
const About = lazy(() => import('../../pages/about/ui/About'));

interface RouteType {
	path: string;
	element: () => React.ReactElement;
}

// Список всех React Routes
const routes: RouteType[] = [
	{
		path: Paths.NOT_FOUND,
		element: () => <NotFound />,
	},
	{
		path: Paths.WELCOME,
		element: () => <Welcome />,
	},
	{
		path: Paths.CHAT,
		element: () => <Chat />,
	},
	{
		path: Paths.RULES,
		element: () => <Rules />,
	},
	{
		path: Paths.ABOUT,
		element: () => <About />,
	},
];

export default routes;
