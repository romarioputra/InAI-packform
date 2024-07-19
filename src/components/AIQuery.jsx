import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

export const AIQuerySC = styled(ButtonSC)`
    padding: 10px 16px;
    width: 100%;
    margin: 12px 0px;
    text-align: left;

    &:hover {
        border: 1px solid #4F46E5;
    }

    .text {
        color: #475569;
        font-weight: 700;
    }
`

export default function AIQueryButtonContainer() {
    return (
        <div>
            <AIQuerySC $border="gray" $transition="borderColor"><img src="/wand.svg"></img> <span className="text">Listed shares balances per month?</span></AIQuerySC>
            <AIQuerySC $border="gray" $transition="borderColor"><img src="/wand.svg"></img> <span className="text">Liquid assets per account?</span></AIQuerySC>
            <AIQuerySC $border="gray" $transition="borderColor"><img src="/wand.svg"></img> <span className="text">What are current portfolio risks?</span></AIQuerySC>
        </div>
    )
}