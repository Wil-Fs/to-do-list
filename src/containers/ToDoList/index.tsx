import { useSelector } from 'react-redux';
import Task from '../../components/Task';
import { Container } from './styles';

import { RootReducer } from '../../store';

const ToDoList = () => {
	const { itens } = useSelector((state: RootReducer) => state.tasks);
	const { term, criterion, value } = useSelector(
		(state: RootReducer) => state.filter
	);

	const filterTask = () => {
		let filteredTasks = itens;
		if (term !== undefined) {
			filteredTasks = filteredTasks.filter(
				(item) =>
					item.title.toLowerCase().search(term.toLowerCase()) >= 0
			);

			if (criterion === 'priority') {
				filteredTasks = filteredTasks.filter(
					(item) => item.priority === value
				);
			} else if (criterion === 'status') {
				filteredTasks = filteredTasks.filter(
					(item) => item.status === value
				);
			}

			return filteredTasks;
		} else {
			return itens;
		}
	};

	return (
		<Container>
			<p>
				2 tarefas marcadas como &quot;caregoria&quot; e &quot;{term}
				&quot;
			</p>
			<ul>
				<li>{term}</li>
				<li>{criterion}</li>
				<li>{value}</li>
			</ul>
			<ul>
				{filterTask().map(
					({ description, title, priority, status, id }) => (
						<li key={title}>
							<Task
								id={id}
								description={description}
								title={title}
								priority={priority}
								status={status}
							/>
						</li>
					)
				)}
			</ul>
		</Container>
	);
};

export default ToDoList;
