import {
	Avatar,
	Box,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Tooltip,
	Typography,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../shared/model/redux/store';
import { HelpOutline, Logout } from '@mui/icons-material';
import { removeNickname } from '../../../../shared/model/redux/slices/nickname';
import { useNavigate } from 'react-router-dom';
import Paths from '../../../../shared/model/data/paths';

export default function Profile(): React.ReactElement {
	const nickname: string = useSelector(
		(state: RootState) => state.nickname.value
	);
	const dispatch = useDispatch<AppDispatch>();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Используется для меню
	const navigate = useNavigate();

	// Перейти на страницу с правилами чата
	function handleRulesClick(): void {
		handleClose();

		navigate(Paths.RULES);
	}

	// Выйти из аккаунта
	function handleLogoutClick(): void {
		handleClose();

		dispatch(removeNickname());
	}

	// Закрыть меню
	function handleClose(): void {
		setAnchorEl(null);
	}

	return (
		<Box display='flex' alignItems='center' gap={2}>
			<Typography variant='body1'>{nickname}</Typography>
			<Tooltip title='Дополнительно'>
				<IconButton
					id='basic-button'
					aria-controls={anchorEl !== null ? 'basic-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={anchorEl !== null ? 'true' : undefined}
					onClick={event => setAnchorEl(event.currentTarget)}
				>
					<Avatar
						alt='Никнейм'
						sx={{
							bgcolor: deepOrange[500],
							cursor: 'pointer',
						}}
					>
						{nickname.split(' ')[0][0]}
						{nickname.split(' ').length > 1 &&
							nickname.split(' ')[1][0]}
					</Avatar>
				</IconButton>
			</Tooltip>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={anchorEl !== null}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem onClick={handleRulesClick}>
					<ListItemIcon>
						<HelpOutline fontSize='small' />
					</ListItemIcon>
					<ListItemText>Правила чата</ListItemText>
				</MenuItem>
				<MenuItem onClick={handleLogoutClick}>
					<ListItemIcon>
						<Logout fontSize='small' />
					</ListItemIcon>
					<ListItemText>Выйти</ListItemText>
				</MenuItem>
			</Menu>
		</Box>
	);
}
