import { useDispatch, useSelector } from 'react-redux';
import FilterCard from '../../components/FilterCard';

import { RootReducer } from '../../store';

import * as S from './styles';
import * as enums from '../../useful/enums/Tarefa';
import { toChangeTerm } from '../../store/reducers/filters';

const SideBar = () => {
	const dispatch = useDispatch();
	const { term } = useSelector((state: RootReducer) => state.filter);

	return (
		<S.Aside>
			<div>
				<S.Search
					type="text"
					placeholder="Buscar"
					value={term}
					onChange={(event) =>
						dispatch(toChangeTerm(event.target.value))
					}
				/>
				<S.Filters>
					<FilterCard
						value={enums.Status.PENDENTE}
						criterion="status"
						caption="pendentes"
					/>
					<FilterCard
						value={enums.Status.CONCLUIDA}
						criterion="status"
						caption="concluidas"
					/>
					<FilterCard
						value={enums.Priority.URGENTE}
						criterion="priority"
						caption="urgentes"
					/>
					<FilterCard
						value={enums.Priority.IMPORTANTE}
						criterion="priority"
						caption="importantes"
					/>
					<FilterCard
						value={enums.Priority.NORMAL}
						criterion="priority"
						caption="normal"
					/>
					<FilterCard criterion="all" caption="todas" />
				</S.Filters>
			</div>
		</S.Aside>
	);
};

export default SideBar;
