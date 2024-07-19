import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const PortfolioChangeButtonSC = styled(ButtonSC)`
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

function PortfolioChangeButton({ text, selected, index, setSelectedIndex }) {
    return (
        <>
            <PortfolioChangeButtonSC $transition="backgroundColor" $selected={selected} onClick={() => setSelectedIndex(index)}>
                <span className="text">{text}</span>
            </PortfolioChangeButtonSC>
        </>
    )
}

export default function PortfolioChangeButtonContainer({ selectedIndex = 0, setSelectedIndex }) {
    return (
        <div className="mt-3">
            <PortfolioChangeButton text="All" selected={selectedIndex == 0} index={0} setSelectedIndex={setSelectedIndex}></PortfolioChangeButton>
            <PortfolioChangeButton text="Realised Gains" selected={selectedIndex == 1} index={1} setSelectedIndex={setSelectedIndex}></PortfolioChangeButton>
            <PortfolioChangeButton text="Unrealised Gains" selected={selectedIndex == 2} index={2} setSelectedIndex={setSelectedIndex}></PortfolioChangeButton>
        </div>
    )
}