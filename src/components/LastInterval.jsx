// We assume "Customise" and "Widget" buttons are some sort of configuration for user

import styled from "styled-components";
import { ButtonSC } from "./Button";

const LastIntervalButtonSC = styled(ButtonSC)`
    padding: 2px 12px;
    margin: 0px 5px;

    .text {
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
    }
`

export default function LastIntervalButton() {
    return (
        <>
            <LastIntervalButtonSC $backgroundColor="lightGray"><span className="text">last day</span></LastIntervalButtonSC>
        </>
    )
}