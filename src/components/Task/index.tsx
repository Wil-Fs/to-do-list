import { useState } from 'react';
import * as S from './styles';

type Props = {
	title: string;
	priority: string;
	status: string;
	description: string;
};

const Task = ({ title, priority, description, status }: Props) => {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<S.Card>
			<S.Title>{title}</S.Title>
			<S.Tags priority={priority}>{priority}</S.Tags>
			<S.Tags status={status}>{status}</S.Tags>
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
