import styled from 'styled-components';

export const SForm = styled.form`
	max-width: 547px;
	width: 100%;
	color: #666666;
	font-size: 14px;
	font-weight: bold;

	textarea {
		resize: none;
		margin: 16px 0;
	}

	p {
		margin-bottom: 16px;
	}
`;

export const Options = styled.div`
	margin-bottom: 16px;

	p {
		margin-bottom: 6px;
	}

	label {
		margin-right: 6px;
	}
`;

export const Option = styled.div`
	display: inline-block;
	text-transform: capitalize;
`;
