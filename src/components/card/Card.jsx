import styled, { css } from "styled-components";
import { backgroundColor, baseCardStyle } from "../../styles/Card";

export const CardSC = styled.div`
    margin-top: ${p => p.$marginTop};
    color: ${p => p.$light ? 'white' : 'black'};
    width: ${p => p.$maxContent ? 'max-content' : '100%'};
    border-radius: ${p => p.$borderRadius ?? '24px'};
    min-width: ${p => p.$minWidth ?? '0'};
    ${baseCardStyle};
    ${p => backgroundColor[p.$backgroundColor]};
`

export const CardHeaderSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title, .text {
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
    }
`

export const CardContentSC = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .main-asset {
        margin-top: 5px;
    }

    .nominal {
        font-size: 30px;
        font-weight: 700;
        line-height: 38px;
        margin-bottom: 10px;
    }
`

export const CardFooterSC = styled.div`
    margin-top: ${p => p.$marginTop};
    .nominal {
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
    }
    .expense {
        color: ${p => p.$subdued ? css`var(--pf-sub-red)` : css`var(--pf-pink)`}
    }
`
