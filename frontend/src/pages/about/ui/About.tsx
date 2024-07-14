import AppBarBackButton from '../../../features/app-bar-back-button/ui/AppBarBackButton';
import Paths from '../../../shared/model/data/paths';
import Content from '../../../widgets/about/ui/Content';

export default function About(): React.ReactElement {
	return (
		<>
			<AppBarBackButton previousUrl={Paths.WELCOME} />
			<Content />
		</>
	);
}
