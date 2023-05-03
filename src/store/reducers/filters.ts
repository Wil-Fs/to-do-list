import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as enums from '../../useful/enums/Tarefa';

type FilterState = {
	term?: string;
	criterion: 'priority' | 'status' | 'all';
	value?: enums.Priority | enums.Status;
};

const initialState: FilterState = {
	term: '',
	criterion: 'all'
};

const filterSlice = createSlice({
	name: 'Filter',
	initialState,
	reducers: {
		toChangeTerm: (state, action: PayloadAction<string>) => {
			state.term = action.payload;
		},
		toChangeFilter: (state, action: PayloadAction<FilterState>) => {
			state.criterion = action.payload.criterion;
			state.value = action.payload.value;
		}
	}
});

export const { toChangeTerm, toChangeFilter } = filterSlice.actions;

export default filterSlice.reducer;
