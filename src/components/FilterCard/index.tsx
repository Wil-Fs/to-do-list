import { useDispatch, useSelector } from 'react-redux';
import { toChangeFilter } from '../../store/reducers/filters';
import * as S from './styles';
import * as enums from '../../useful/enums/Tarefa';
import { RootReducer } from '../../store';

export type Props = {
	caption: string;
	criterion: 'status' | 'prioridade' | 'all';
	value?: enums.Priority | enums.Status;
};

const FilterCard = ({ caption, criterion, value }: Props) => {
	const dispatch = useDispatch();
	const { filter, tasks } = useSelector((state: RootReducer) => state);

	const verifyActive = () => {
		const sameCriterion = filter.criterion === criterion;
		const sameValue = filter.value === value;

		return sameCriterion && sameValue;
	};

	const countTasks = () => {
		if (criterion === 'all') return tasks.itens.length;
		if (criterion === 'prioridade') {
			return tasks.itens.filter((item) => item.priority === value).length;
		}
		if (criterion === 'status') {
			return tasks.itens.filter((item) => item.status === value).length;
		}
	};

	const toFilter = () => {
		dispatch(
			toChangeFilter({
				criterion,
				value
			})
		);
	};

	const active = verifyActive();

	const counter = countTasks();

	return (
		<S.Card active={active} onClick={toFilter}>
			<S.Counter>{counter}</S.Counter>
			<S.Label>{caption}</S.Label>
		</S.Card>
	);
};

export default FilterCard;
