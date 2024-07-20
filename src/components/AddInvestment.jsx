import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";
import { useState } from "react";

const Container = styled.div`
    display: flex;
    width: 100%;
    column-gap: 15px;
`

const AddInvestmentSC = styled(ButtonSC)`
    flex-basis: 100%; 
    margin: 18px 0px;
    &:hover {
        border: 1px solid #4F46E5;
    }

    .text {
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
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

function AddInvestment({ text, selected, icon, index, setSelectedIndex }) {
    return (
        <>
            <AddInvestmentSC
                $border="transparent"
                $transition="borderColor"
                $selected={selected}
                onClick={() => setSelectedIndex(index)}>
                <img style={{marginBottom: "3px"}} src={`/${icon}.svg`}></img> <span className="text">{text}</span>
            </AddInvestmentSC>
        </>
    )
}

export default function AddInvestmentContainer() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <Container>
            <AddInvestment text="Add new asset" icon="asset" selected={selectedIndex == 0} index={0} setSelectedIndex={setSelectedIndex}></AddInvestment>
            <AddInvestment text="Add new entity" icon="entity" selected={selectedIndex == 1} index={1} setSelectedIndex={setSelectedIndex}></AddInvestment>
        </Container>
    )
}