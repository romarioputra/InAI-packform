import styled, { css } from "styled-components";
import { backgroundColor, border, color, transition } from "../styles/Button";

const baseButtonStyle = css`
    padding: 8px 12px;
    border-radius: 1234px;
    
    img {
        display: inline;
    }

    .text {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.006em;
        text-align: left;
        color: #475569;
    }
`

export const ButtonSC = styled.button`
    ${baseButtonStyle}
    ${p => backgroundColor[p.$backgroundColor]};
    ${p => transition[p.$transition]};
    ${p => border[p.$border]};
    ${p => color[p.$color]};
`
