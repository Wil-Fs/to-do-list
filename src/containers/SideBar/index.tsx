import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootReducer } from '../../store';
import FilterCard from '../../components/FilterCard';
import * as S from './styles';
import * as enums from '../../useful/enums/Tarefa';
import { toChangeTerm } from '../../store/reducers/filters';
import { BackButton, Search } from '../../styles';

type Props = {
	showFilters: boolean;
};

const SideBar = ({ showFilters }: Props) => {
	const dispatch = useDispatch();
	const { term } = useSelector((state: RootReducer) => state.filter);
	const navigate = useNavigate();
	return (
		<S.Aside>
			<div>
				{showFilters ? (
					<>
						<Search
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
								criterion="prioridade"
								caption="urgentes"
							/>
							<FilterCard
								value={enums.Priority.IMPORTANTE}
								criterion="prioridade"
								caption="importantes"
							/>
							<FilterCard
								value={enums.Priority.NORMAL}
								criterion="prioridade"
								caption="normal"
							/>
							<FilterCard criterion="all" caption="todas" />
						</S.Filters>
					</>
				) : (
					<BackButton type="button" onClick={() => navigate('/')}>
						Voltar a lista de tarefas
					</BackButton>
				)}
			</div>
		</S.Aside>
	);
};

export default SideBar;
