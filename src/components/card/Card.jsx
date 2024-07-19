import styled from "styled-components";
import { backgroundColor, baseCardStyle } from "../../styles/Card";

export const CardSC = styled.div`
    ${baseCardStyle};
    ${p => backgroundColor[p.$backgroundColor]};
`

export const CardHeaderSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
        color: ${p => p.$light ? 'white' : 'black'};
        font-size: 16px;
        weight: 500;
        line-height: 24px;
    }
`
