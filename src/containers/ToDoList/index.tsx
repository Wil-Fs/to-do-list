import { useSelector } from 'react-redux';
import Task from '../../components/Task';
import { Container, Result } from './styles';

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

	const showResults = (quantity: number) => {
		let message = '';
		const complement =
			term != undefined && term.length > 0 ? `e "${term}"` : '';

		if (criterion == 'all') {
			message = `${quantity} tarefa(s) encontrada(s) como: ${
				term != undefined && term.length > 0 ? `e "${term}"` : ''
			}`;
		} else {
			message = `${quantity} tarefa(s) encontrada(s) como: "${`${criterion}=${value}`}" ${complement}`;
		}

		return message;
	};

	const task = filterTask();
	const message = showResults(task.length);

	return (
		<Container>
			<Result>{message}</Result>
			<ul>
				{task.map(({ description, title, priority, status, id }) => (
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
