import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './reducers/tasks';

const store = configureStore({
	reducer: {
		tasks: tasksReducer
	}
});

type RootReducer = ReturnType<typeof store.getState>;
