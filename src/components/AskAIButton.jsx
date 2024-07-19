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
            <AskAIButtonSC><img src="/white-wand.svg"></img> <span className="text">Ask AI Assistant</span> <img src="/arrow-r.svg"></img></AskAIButtonSC>
        </>
    )
}