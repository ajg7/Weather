import styled from "styled-components";

export const StyledLandingPage = styled.div`
    padding: ${({ theme }) => theme.globalPadding};
    
    * {
        margin: 5px 0;
    }

    header, section .descriptor, footer {
        display: flex;
        justify-content: center;
    }

    section .buttons {
        display: flex;
        justify-content: center;
    }

`; 