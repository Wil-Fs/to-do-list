import FilterCard from '../../components/FilterCard';

import * as S from './styles';

const SideBar = () => (
	<S.Aside>
		<div>
			<S.Search type="text" placeholder="Buscar" />
			<S.Filters>
				<FilterCard caption="pendentes" counter={1} />
				<FilterCard caption="concluidas" counter={2} />
				<FilterCard caption="urgentes" counter={3} />
				<FilterCard caption="importantes" counter={4} />
				<FilterCard caption="normal" counter={5} />
				<FilterCard active caption="todas" counter={7} />
			</S.Filters>
		</div>
	</S.Aside>
);

export default SideBar;
