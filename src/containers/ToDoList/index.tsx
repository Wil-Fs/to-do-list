import Task from '../../components/Task';
import { Container } from './styles';
import * as enums from '../../useful/enums/Tarefa';

const tasks = [
	{
		title: 'Estudar typescript',
		description: 'Ver aula 6, modulo 31',
		priority: enums.Priority.IMPORTANTE,
		status: enums.Status.CONCLUIDA
	},
	{
		title: 'Etudar Ingles',
		description: 'Fazer atividade 6',
		priority: enums.Priority.URGENTE,
		status: enums.Status.CONCLUIDA
	},
	{
		title: 'Ver aulas da faculdade',
		description: 'Continuar com o desenvolvimento mobile',
		priority: enums.Priority.NORMAL,
		status: enums.Status.PENDENTE
	}
];

const ToDoList = () => (
	<Container>
		<p>2 tarefas marcadas como &quot;caregoria&quot; e &quot;termo&quot;</p>
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

export default ToDoList;
