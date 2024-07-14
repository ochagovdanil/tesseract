/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Paths from '../../../shared/model/data/paths';
import { RootState } from '../../../shared/model/redux/store';
import AppBarBackButton from '../../../features/app-bar-back-button/ui/AppBarBackButton';
import RulesList from '../../../widgets/rules/ui/RulesList';

export default function Rules(): React.ReactElement {
	const navigate = useNavigate();

	const nickname: string = useSelector(
		(state: RootState) => state.nickname.value
	);

	// Если никнейм не существует, то переходим на страницу приветствия
	useEffect(() => {
		if (nickname.length === 0) navigate(Paths.WELCOME);
	}, [nickname]);

	return (
		<>
			<AppBarBackButton previousUrl={Paths.CHAT} />
			<RulesList />
		</>
	);
}
