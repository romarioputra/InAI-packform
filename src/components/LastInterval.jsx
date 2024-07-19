// We assume "Customise" and "Widget" buttons are some sort of configuration for user

import styled from "styled-components";
import { ButtonSC } from "./Button";

const LastIntervalButtonSC = styled(ButtonSC)`
    padding: 4px 12px;
    background-color: var(--pf-light-gray);
    margin: 0px 5px;
`

export default function LastIntervalButton() {
    return (
        <>
            <LastIntervalButtonSC><span className="text">last day</span></LastIntervalButtonSC>
        </>
    )
}