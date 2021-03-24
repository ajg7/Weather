import styled from "styled-components";

export const StyledLandingPage = styled.div`
	padding: ${({ theme }) => theme.globalPadding};

	* {
		margin: 5px 0;
	}

	header,
	section .descriptor,
	section .buttons,
	footer {
		display: flex;
		justify-content: center;
	}
`;
