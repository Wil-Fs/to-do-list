import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import * as enums from '../../useful/enums/Tarefa';
import { SaveButton } from '../../styles';

import { removeTask, editTask, setStatus } from '../../store/reducers/tasks';
import TaskClass from '../../modules/Tasks';
type Props = TaskClass;

const Task = ({
	title,
	priority,
	description: descriptionComponent,
	status,
	id
}: Props) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [description, setDescription] = useState('');

	useEffect(() => {
		if (descriptionComponent.length > 0) {
			setDescription(descriptionComponent);
		}
	}, [descriptionComponent]);

	const cancelEdit = () => {
		setIsEditing(false);
		setDescription(descriptionComponent);
	};

	const setStatusTask = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(
			setStatus({
				id,
				finished: event.target.checked
			})
		);
	};

	return (
		<S.Card>
			<label htmlFor={title}>
				<input
					onChange={setStatusTask}
					checked={status == enums.Status.CONCLUIDA}
					type="checkbox"
					id={title}
				/>
				<S.Title>
					{isEditing && <em>Editando: </em>}
					{title}
				</S.Title>
			</label>
			<S.Tags parameter="priority" priority={priority}>
				{priority}
			</S.Tags>
			<S.Tags parameter="status" status={status}>
				{status}
			</S.Tags>
			<S.Description
				disabled={!isEditing}
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<S.ActionBar>
				{isEditing ? (
					<>
						<SaveButton
							onClick={() => {
								dispatch(
									editTask({
										description,
										id,
										status,
										priority,
										title
									})
								);
								setIsEditing(false);
							}}
						>
							Salvar
						</SaveButton>
						<S.RemoveCancelButton onClick={cancelEdit}>
							Cancelar
						</S.RemoveCancelButton>
					</>
				) : (
					<>
						<S.Buttons onClick={() => setIsEditing(true)}>
							Editar
						</S.Buttons>
						<S.RemoveCancelButton
							onClick={() => dispatch(removeTask(id))}
						>
							Remover
						</S.RemoveCancelButton>
					</>
				)}
			</S.ActionBar>
		</S.Card>
	);
};

export default Task;
