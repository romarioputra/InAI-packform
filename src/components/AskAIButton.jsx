import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const AskAIButtonSC = styled(ButtonSC)`
    background-color: #1E293B;
    padding: 12px 20px;
    .text {
        color: white;
    }

`

export default function AskAIButton() {
    return (
        <>
            <AskAIButtonSC><span className="text">I Ask AI Assistant I</span></AskAIButtonSC>
        </>
    )
}