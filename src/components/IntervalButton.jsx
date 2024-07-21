import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";
import { Flex } from "./FlexCointainer";

const Container = styled(Flex)`
    background: #F1F5F9;
    width: 100%;
    padding: 3px;
    border-radius: 1234px;
    margin-top: 10px;
`

const IntervalButtonSC = styled(ButtonSC)`
    flex-basis: 100%;

    .text {
        font-weight: 700;
    }

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

function IntervalButton({ text, selected, index, setSelectedInterval }) {
    return (
        <>
            <IntervalButtonSC $transition="backgroundColor" $textSize="md" $selected={selected} onClick={() => setSelectedInterval(index)}>
                <span className="text">{text}</span>
            </IntervalButtonSC>
        </>
    )
}

export default function IntervalButtonContainer({ selectedIndex = 3, setSelectedInterval }) {
    const fy = `FY ${new Date().getFullYear()}`
    return (
        <Container $columnGap="2px">
            <IntervalButton text="Day" selected={selectedIndex == 0} index={0} setSelectedInterval={setSelectedInterval}></IntervalButton>
            <IntervalButton text="Month" selected={selectedIndex == 1} index={1} setSelectedInterval={setSelectedInterval}></IntervalButton>
            <IntervalButton text="Quarter" selected={selectedIndex == 2} index={2} setSelectedInterval={setSelectedInterval}></IntervalButton>
            <IntervalButton text={fy} selected={selectedIndex == 3} index={3} setSelectedInterval={setSelectedInterval}></IntervalButton>
        </Container>
    )
}