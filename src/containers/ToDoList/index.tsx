import { useSelector } from 'react-redux';
import Task from '../../components/Task';
import { Container } from './styles';

import { RootReducer } from '../../store';

const ToDoList = () => {
	const { itens } = useSelector((state: RootReducer) => state.tasks);

	return (
		<Container>
			<p>
				2 tarefas marcadas como &quot;caregoria&quot; e
				&quot;termo&quot;
			</p>
			<ul>
				{itens.map(({ description, title, priority, status, id }) => (
					<li key={title}>
						<Task
							id={id}
							description={description}
							title={title}
							priority={priority}
							status={status}
						/>
					</li>
				))}
			</ul>
		</Container>
	);
};

export default ToDoList;
