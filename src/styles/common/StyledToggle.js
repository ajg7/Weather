import styled from "styled-components";

export const StyledToggle = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

    label {
        font-family: ${({ theme }) => theme.fontFamily};
    }
    
	input {
		margin: 0 10px;
	}
`;
