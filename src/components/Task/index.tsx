import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';

import { removeTask, editTask } from '../../store/reducers/tasks';
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

	return (
		<S.Card>
			<S.Title>{title}</S.Title>
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
						<S.SaveButton
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
						</S.SaveButton>
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
