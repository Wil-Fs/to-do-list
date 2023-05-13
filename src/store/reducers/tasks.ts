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
		},
		registerTask: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
			const taskExist = state.itens.find(
				(task) =>
					task.title.toLowerCase() ===
					action.payload.title.toLowerCase()
			);

			if (taskExist) {
				alert('Tarefa já existente');
			} else {
				const lastTask = state.itens[state.itens.length - 1];

				const newTask = {
					...action.payload,
					id: lastTask ? lastTask.id + 1 : 1
				};
				state.itens.push(newTask);
			}
		},
		setStatus: (
			state,
			action: PayloadAction<{ id: number; finished: boolean }>
		) => {
			const taskIndex = state.itens.findIndex(
				(t) => t.id === action.payload.id
			);

			if (taskIndex >= 0) {
				state.itens[taskIndex].status = action.payload.finished
					? enums.Status.CONCLUIDA
					: enums.Status.PENDENTE;
			}
		}
	}
});

export const { removeTask, editTask, registerTask, setStatus } =
	taskSlice.actions;
export default taskSlice.reducer;
