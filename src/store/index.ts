import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasks';
import filtersReducer from './reducers/filters';
const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filter: filtersReducer
	}
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
