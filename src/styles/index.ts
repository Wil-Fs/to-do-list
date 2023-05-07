import styled, { createGlobalStyle } from 'styled-components';

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

export default GlobalStyle;
