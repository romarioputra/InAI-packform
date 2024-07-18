import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const AddInvestmentSC = styled(ButtonSC)`
    border: 1px solid transparent;
    transition: border-color 270ms linear;

    &:hover {
        border: 1px solid #4F46E5;
    }

    ${(p) => {
        let c = css`
            border-color: #CBD5E1;
        `
        if (p.$selected) {
            c = css`
                background-color: #4F46E5;
                border-color: #4F46E5;
                .text {
                    color: white;
                }
            `
        }
        return c
    }}

`

function AddInvestment({ text, selected }) {
    return (
        <>
            <AddInvestmentSC $selected={selected}>
                <span className="text">I {text}</span>
            </AddInvestmentSC>
        </>
    )
}

export default function AddInvestmentContainer({ selectedIndex = 0 }) {
    return (
        <div>
            <AddInvestment text="Add new asset" selected={selectedIndex == 0}></AddInvestment>
            <AddInvestment text="Add new entity" selected={selectedIndex == 1}></AddInvestment>
        </div>
    )
}