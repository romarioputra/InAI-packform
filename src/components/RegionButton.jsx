import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const RegionButtonSC = styled(ButtonSC)`
    border: 1px solid transparent;
    transition: border-color 270ms linear;

    &:hover {
        border: 1px solid #4F46E5;
    }

    ${(p) => {
        let c = null
        if (p.$selected) {
            c = css`
                border: 1px solid #4F46E5;
                .text {
                    color: #4F46E5;
                }
            `
        }
        return c
    }}

`

function RegionButton({ region, selected }) {
    return (
        <>
            <RegionButtonSC $selected={selected}>
                <span className="text">I {region}</span>
            </RegionButtonSC>
        </>
    )
}

export default function RegionButtonContainer({ selectedIndex = 0 }) {
    return (
        <div>
            <RegionButton region="All" selected={selectedIndex == 0}></RegionButton>
            <RegionButton region="Australia" selected={selectedIndex == 1}></RegionButton>
            <RegionButton region="USA" selected={selectedIndex == 2}></RegionButton>
            <RegionButton region="Europe" selected={selectedIndex == 3}></RegionButton>
        </div>
    )
}