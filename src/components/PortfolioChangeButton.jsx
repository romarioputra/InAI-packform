import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const PortfolioChangeButtonSC = styled(ButtonSC)`
    transition: background-color 270ms linear;

    &:hover {
        background: #EEF2FF;
    }

    ${(p) => {
        let c = null
        if (p.$selected) {
            c = css`
                background: #EEF2FF;

                .text {
                    color: #4F46E5;
                }
            `
        }
        return c
    }}

`

function PortfolioChangeButton({ text, selected }) {
    return (
        <>
            <PortfolioChangeButtonSC $selected={selected}>
                <span className="text">{text}</span>
            </PortfolioChangeButtonSC>
        </>
    )
}

export default function PortfolioChangeButtonContainer({ selectedIndex = 0 }) {
    return (
        <div>
            <PortfolioChangeButton text="All" selected={selectedIndex == 0}></PortfolioChangeButton>
            <PortfolioChangeButton text="Realised Gains" selected={selectedIndex == 1}></PortfolioChangeButton>
            <PortfolioChangeButton text="Unrealised Gains" selected={selectedIndex == 2}></PortfolioChangeButton>
        </div>
    )
}