import {
	Container,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import { rules } from '../../../shared/model/data/rules';

export default function RulesList(): React.ReactElement {
	return (
		<Container>
			<Typography variant='h4' sx={{ py: 4 }} align='center'>
				Правила веб чата Тессеракт:
			</Typography>
			<List sx={{ listStyle: 'decimal' }}>
				{rules.map(({ id, rule }) => (
					<ListItem key={id} sx={{ display: 'list-item', ml: 2 }}>
						<ListItemText>{rule}</ListItemText>
					</ListItem>
				))}
			</List>
		</Container>
	);
}
