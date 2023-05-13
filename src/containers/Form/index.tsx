import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MainContainer, Title } from '../../styles';
import { Search, SaveButton } from '../../styles';
import { SForm, Options, Option } from './styles';
import * as enums from '../../useful/enums/Tarefa';
import Task from '../../modules/Tasks';
import { registerTask } from '../../store/reducers/tasks';

const Form = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [description, setDescrition] = useState('');
	const [priority, setPriority] = useState(enums.Priority.NORMAL);

	const registerNewTask = (event: FormEvent) => {
		event.preventDefault();

		dispatch(
			registerTask({
				title,
				priority,
				status: enums.Status.PENDENTE,
				description
			})
		);
		navigate('/');
	};

	return (
		<MainContainer>
			<Title>Nova tarefa</Title>
			<SForm onSubmit={registerNewTask}>
				<Search
					value={title}
					onChange={({ target }) => setTitle(target.value)}
					type="text"
					placeholder="Titulo"
				/>
				<Search
					value={description}
					onChange={({ target }) => setDescrition(target.value)}
					as="textarea"
					placeholder="Descrição da tarefa"
				/>
				<Options>
					<p>Prioridade</p>
					{Object.values(enums.Priority).map((prioritys) => (
						<Option key={prioritys}>
							<input
								value={prioritys}
								name="prioridade"
								type="radio"
								id={prioritys}
								onChange={({ target }) =>
									setPriority(target.value as enums.Priority)
								}
								defaultChecked={
									prioritys == enums.Priority.NORMAL
								}
							/>{' '}
							<label htmlFor={prioritys}>{prioritys}</label>
						</Option>
					))}
				</Options>
				<SaveButton type="submit">Cadastrar</SaveButton>
			</SForm>
		</MainContainer>
	);
};

export default Form;
