import styled from 'styled-components';

import variables from '../../styles/variables';

type TagProps = {
	priority?: string;
	status?: string;
};

function changeBgColor(props: TagProps): string {
	if ('status' in props) {
		if (props.status == 'pendente') return variables.yellow;
		if (props.status == 'concluído') return variables.green;
	} else if ('priority' in props) {
		if (props.status == 'urgente') return variables.red;
		if (props.status == 'importante') return variables.darkYellow;
	}

	return '#ccc';
}

export const Card = styled.div`
	background-color: #fcfcfc;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
	padding: 16px;
	margin-bottom: 32px;
	border-radius: 16px;
`;

export const Title = styled.h3`
	font-weight: bold;
	font-size: 18px;
	margin-bottom: 16px;
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

export const SaveButton = styled(Buttons)`
	background-color: ${variables.green};
`;

export const RemoveCancelButton = styled(Buttons)`
	background-color: ${variables.red};
`;
