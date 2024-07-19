import styled, { css } from "styled-components";
import { backgroundColor, baseCardStyle } from "../../styles/Card";

export const CardSC = styled.div`
    color: ${p => p.$light ? 'white' : 'black'};
    ${baseCardStyle};
    ${p => backgroundColor[p.$backgroundColor]};
`

export const CardHeaderSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
        font-size: 16px;
        weight: 500;
        line-height: 24px;
    }
`

export const CardContentSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nominal {
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
        margin-bottom: 10px;
    }
`

export const CardFooterSC = styled.div`
    margin-top: 10px;
    .nominal {
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
    }
    .expense {
        color: ${p => p.$subdued ? css`var(--pf-sub-red)` : css`var(--pf-pink)`}
    }
`
