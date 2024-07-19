// We assume "Customise" and "Widget" buttons are some sort of configuration for user

import styled from "styled-components";
import { ButtonSC } from "./Button";

const LastIntervalButtonSC = styled(ButtonSC)`
    padding: 4px 8px;
    background-color: var(--pf-light-gray)
`

export default function LastIntervalButton() {
    return (
        <>
            <LastIntervalButtonSC><span className="text">last day</span></LastIntervalButtonSC>
        </>
    )
}