// We assume "Customise" and "Widget" buttons are some sort of configuration for user

import styled from "styled-components";
import { ButtonSC } from "./Button";

const LastIntervalButtonSC = styled(ButtonSC)`
    padding: 2px 12px;
    margin: 0px 10px;
`

export default function LastIntervalButton() {
    return (
        <>
            <LastIntervalButtonSC $backgroundColor="lightGray" $textSize="sm"><span className="text">last day</span></LastIntervalButtonSC>
        </>
    )
}