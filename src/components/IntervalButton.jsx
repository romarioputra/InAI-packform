import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const Container = styled.div`
    display: flex;
    background: #F1F5F9;
    width: max-content;
    padding: 3px;
    border-radius: 1234px;
    column-gap: 2px;
`

const IntervalButtonSC = styled(ButtonSC)`
    transition: background-color 270ms linear;

    &:hover {
        background: #FFFFFF;
        box-shadow: 0px 2px 4px -2px #1717170F;
        box-shadow: 0px 4px 8px -2px #1717171A;
    }

    ${(p) => {
        let c = null
        if (p.$selected) {
            c = css`
                box-shadow: 0px 2px 4px -2px #1717170F;
                box-shadow: 0px 4px 8px -2px #1717171A;
                background: #FFFFFF;
                .text {
                    color: #4F46E5;
                }
            `
        }
        return c
    }}

`

function IntervalButton({ text, selected }) {
    return (
        <>
            <IntervalButtonSC $selected={selected}>
                <span className="text">{text}</span>
            </IntervalButtonSC>
        </>
    )
}

export default function IntervalButtonContainer({ selectedIndex = 3 }) {
    const fy = `FY ${new Date().getFullYear()}`
    return (
        <Container>
            <IntervalButton text="Day" selected={selectedIndex == 0}></IntervalButton>
            <IntervalButton text="Month" selected={selectedIndex == 1}></IntervalButton>
            <IntervalButton text="Quarter" selected={selectedIndex == 2}></IntervalButton>
            <IntervalButton text={fy} selected={selectedIndex == 3}></IntervalButton>
        </Container>
    )
}