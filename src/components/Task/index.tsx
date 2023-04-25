import { useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './styles';

import { removeTask } from '../../store/reducers/tasks';
import TaskClass from '../../modules/Tasks';
type Props = TaskClass;

const Task = ({ title, priority, description, status, id }: Props) => {
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);

	return (
		<S.Card>
			<S.Title>{title}</S.Title>
			<S.Tags parameter="priority" priority={priority}>
				{priority}
			</S.Tags>
			<S.Tags parameter="status" status={status}>
				{status}
			</S.Tags>
			<S.Description value={description} />
			<S.ActionBar>
				{isEditing ? (
					<>
						<S.SaveButton>Salvar</S.SaveButton>
						<S.RemoveCancelButton
							onClick={() => setIsEditing(false)}
						>
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
