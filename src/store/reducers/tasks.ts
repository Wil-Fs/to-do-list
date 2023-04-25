import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Task from '../../modules/Tasks';
import * as enums from '../../useful/enums/Tarefa';

const taskSlice = createSlice({
	name: 'tasks',
	initialState: [
		new Task(
			'Estudar FrontEnd na Ebac',
			enums.Priority.IMPORTANTE,
			enums.Status.PENDENTE,
			'',
			1
		),
		new Task(
			'Estudar Inglês',
			enums.Priority.IMPORTANTE,
			enums.Status.PENDENTE,
			'',
			2
		),
		new Task(
			'Estudar Aulas da faculdade',
			enums.Priority.URGENTE,
			enums.Status.PENDENTE,
			'',
			3
		),
		new Task(
			'Ir para academia',
			enums.Priority.IMPORTANTE,
			enums.Status.PENDENTE,
			'',
			4
		)
	],
	reducers: {
		removeTask: (state, action: PayloadAction<number>) => {
			state = state.filter((task) => task.id !== action.payload);
		}
	}
});

export const { removeTask } = taskSlice.actions;
export default taskSlice.reducer;
