import { useState } from 'react';
import * as S from './styles';
import * as enums from '../../useful/enums/Tarefa';

type Props = {
	title: string;
	priority: enums.Priority;
	status: enums.Status;
	description: string;
};

const Task = ({ title, priority, description, status }: Props) => {
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
						<S.RemoveCancelButton>Remover</S.RemoveCancelButton>
					</>
				)}
			</S.ActionBar>
		</S.Card>
	);
};

export default Task;
