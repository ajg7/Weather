import styled from "styled-components";

export const StyledWeatherChart = styled.div`
	display: flex;
	justify-content: center;

    @media (max-width: 400px) {
        canvas {
            width: 100%;
        }
    }

    canvas {
        height: 400px;
        width: 800px;
    }
`;
