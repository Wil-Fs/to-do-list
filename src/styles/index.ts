import styled, { createGlobalStyle } from 'styled-components';
import variables from './variables';
import { Buttons } from '../components/Task/styles';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: Roboto, sans-serif;
		list-style: none;
		text-decoration: none
	}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
	padding: 0 40px;
	height: 100vh;
	overflow-y: scroll;
`;

export const Title = styled.h2`
	display: block;
	font-weight: bold;
	font-size: 18px;
	margin: 40px auto;
`;

export const Search = styled.input`
	padding: 8px;
	border-radius: 8px;
	background-color: #fff;
	font-weight: bold;
	color: #666666;
	width: 100%;
`;

export const SaveButton = styled(Buttons)`
	background-color: ${variables.green};
`;

export const BackButton = styled(Buttons)`
	background-color: #2f3640;
`;
export default GlobalStyle;
