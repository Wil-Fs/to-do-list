import * as enums from '../useful/enums/Tarefa';

class Task {
	title: string;
	priority: enums.Priority;
	status: enums.Status;
	description: string;
	id: number;

	constructor(
		title: string,
		prioruty: enums.Priority,
		status: enums.Status,
		description: string,
		id: number
	) {
		this.title = title;
		this.priority = prioruty;
		this.status = status;
		this.description = description;
		this.id = id;
	}
}

export default Task;
