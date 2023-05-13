import styled from 'styled-components';

import variables from '../../styles/variables';

import * as enums from '../../useful/enums/Tarefa';

type TagProps = {
	priority?: enums.Priority;
	status?: enums.Status;
	parameter: 'priority' | 'status';
};

function changeBgColor({ status, parameter, priority }: TagProps): string {
	if (parameter == 'priority') {
		if (priority === enums.Priority.URGENTE) return variables.red;
		if (priority === enums.Priority.IMPORTANTE) return variables.darkYellow;
	} else {
		if (status === enums.Status.PENDENTE) return variables.yellow;
		if (status === enums.Status.CONCLUIDA) return variables.green;
	}
	return '#ccc';
}

export const Card = styled.div`
	background-color: #fcfcfc;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	padding: 16px;
	margin-bottom: 32px;
	border-radius: 16px;

	label {
		display: flex;
		align-items: center;
		margin-bottom: 16px;
	}
`;

export const Title = styled.h3`
	font-weight: bold;
	font-size: 18px;
	margin-left: 10px;
`;

export const Tags = styled.span<TagProps>`
	padding: 4px 8px;
	font-size: 10px;
	font-weight: bold;
	color: #fff;
	background-color: ${(props) => changeBgColor(props)};
	border-radius: 8px;
	margin-right: 16px;
	display: inline-block;
`;

export const Description = styled.textarea`
	color: #8b8b8b;
	font-size: 14px;
	line-height: 24px;
	font-family: 'Roboto Mono', monospace;
	display: block;
	width: 100%;
	margin-bottom: 16px;
	margin-top: 16px;
	resize: none;
	border: none;
	background-color: transparent;
`;

export const ActionBar = styled.div`
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	padding-top: 16px;
`;

export const Buttons = styled.button`
	font-weight: bold;
	font-size: 12px;
	color: #fff;
	padding: 8px 12px;
	cursor: pointer;
	background-color: #2f3640;
	border-radius: 8px;
	margin-right: 8px;
`;

export const RemoveCancelButton = styled(Buttons)`
	background-color: ${variables.red};
`;
