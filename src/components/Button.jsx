import styled from "styled-components";
import { backgroundColor, baseButtonStyle, border, color, textSize, transition } from "../styles/Button";

export const ButtonSC = styled.button`
    ${baseButtonStyle}
    ${p => backgroundColor[p.$backgroundColor]};
    ${p => transition[p.$transition]};
    ${p => border[p.$border]};
    ${p => color[p.$color]};
    ${p => textSize[p.$textSize]}
`
