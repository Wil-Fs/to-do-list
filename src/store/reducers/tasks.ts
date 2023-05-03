import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Task from '../../modules/Tasks';
import * as enums from '../../useful/enums/Tarefa';

type TaskState = {
	itens: Task[];
};

const initialState: TaskState = {
	itens: [
		{
			id: Math.random() * 1000,
			description: 'Estudar Js atraves do React e o Redux',
			priority: enums.Priority.IMPORTANTE,
			status: enums.Status.PENDENTE,
			title: 'Estudar JS'
		},
		{
			id: Math.random() * 1000,
			description: 'Estudar typescript',
			priority: enums.Priority.URGENTE,
			status: enums.Status.CONCLUIDA,
			title: 'Estudar JS'
		},
		{
			id: Math.random() * 1000,
			description: 'Estudar Python',
			priority: enums.Priority.NORMAL,
			status: enums.Status.PENDENTE,
			title: 'Estudar Py'
		},
		{
			id: Math.random() * 1000,
			description: 'Estudar Django',
			priority: enums.Priority.URGENTE,
			status: enums.Status.CONCLUIDA,
			title: 'Estudar Py'
		}
	]
};

const taskSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		removeTask: (state, action: PayloadAction<number>) => {
			state.itens = state.itens.filter(
				(task) => task.id !== action.payload
			);
			console.log(state.itens);
		},
		editTask: (state, action: PayloadAction<Task>) => {
			const taskIndex = state.itens.findIndex(
				(t) => t.id === action.payload.id
			);

			if (taskIndex >= 0) {
				state.itens[taskIndex] = action.payload;
			}
		}
	}
});

export const { removeTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
