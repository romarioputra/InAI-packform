import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

export const AIQuerySC = styled(ButtonSC)`
    border: 1px solid #CBD5E1;
    padding: 10px 16px;
    width: 100%;
    margin: 12px 0px;
    text-align: left;

    .text {
        color: #475569;
        font-weight: 700;
    }

`

export default function AIQueryButtonContainer() {
    return (
        <div>
            <AIQuerySC><img src="/wand.svg"></img> <span className="text">Listed shares balances per month?</span></AIQuerySC>
            <AIQuerySC><img src="/wand.svg"></img> <span className="text">Liquid assets per account?</span></AIQuerySC>
            <AIQuerySC><img src="/wand.svg"></img> <span className="text">What are current portfolio risks?</span></AIQuerySC>
        </div>
    )
}