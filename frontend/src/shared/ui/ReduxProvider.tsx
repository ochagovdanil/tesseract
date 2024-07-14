import { memo } from 'react';
import { Provider } from 'react-redux';
import { store } from '../model/redux/store';

interface ReduxProviderArgumentTypes {
	children: React.ReactNode;
}

const ReduxProvider = memo(
	({ children }: ReduxProviderArgumentTypes): React.ReactElement => {
		return <Provider store={store}>{children}</Provider>;
	}
);

export default ReduxProvider;
