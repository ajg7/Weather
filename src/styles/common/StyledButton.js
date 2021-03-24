import styled from "styled-components";
export const StyledButton = styled.div`
    button {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 50px;
		width: 150px;
		background-color: ${({ theme }) => theme.primary};
		color: ${({ theme }) => theme.secondary};
		border-radius: 16px;
		text-transform: capitalize;
        font-weight: bold;

		&:hover {
			background-color: ${({ theme }) => theme.secondary};
			color: ${({ theme }) => theme.primary};
		}
	}
`;