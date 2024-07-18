import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const AIQuerySC = styled(ButtonSC)`
    border: 1px solid #CBD5E1;
    padding: 10px 16px;
    width: 100%;
    margin: 12px 0px;
    text-align: left;

    .text {
        color: #475569;
    }

`

export default function AIQueryButtonContainer() {
    return (
        <div>
            <AIQuerySC><span className="text">I Listed shares balances per  month?</span></AIQuerySC>
            <AIQuerySC><span className="text">I Liquid  assets per account?</span></AIQuerySC>
            <AIQuerySC><span className="text">I What are current portfolio risks?</span></AIQuerySC>
        </div>
    )
}