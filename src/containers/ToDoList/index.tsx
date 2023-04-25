import { useSelector } from 'react-redux';
import Task from '../../components/Task';
import { Container } from './styles';

import { RootReducer } from '../../store';

const ToDoList = () => {
	const { tasks } = useSelector((state: RootReducer) => state);

	return (
		<Container>
			<p>
				2 tarefas marcadas como &quot;caregoria&quot; e
				&quot;termo&quot;
			</p>
			<ul>
				{tasks.map(({ description, title, priority, status }) => (
					<li key={title}>
						<Task
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
