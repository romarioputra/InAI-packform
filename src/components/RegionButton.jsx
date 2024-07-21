import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";
import { Flex } from "./FlexCointainer";

const RegionButtonSC = styled(ButtonSC)`
    flex-grow: 1;
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

function RegionButton({ region, selected, index, setSelectedRegionIndex }) {
    return (
        <>
            <RegionButtonSC $backgroundColor="white"
                $transition="borderColor"
                $border="transparent" $textSize="md" $selected={selected}
                onClick={() => setSelectedRegionIndex(index)}>
                <img src={`/${region}.svg`}></img> <span className="text">{region}</span>
            </RegionButtonSC>
        </>
    )
}

export default function RegionButtonContainer({ selectedIndex = 0, setSelectedRegionIndex }) {
    return (
        <Flex className="my-5">
            <RegionButton region="All" selected={selectedIndex == 0} index={0} setSelectedRegionIndex={setSelectedRegionIndex}></RegionButton>
            <RegionButton region="Australia" selected={selectedIndex == 1} index={1} setSelectedRegionIndex={setSelectedRegionIndex}></RegionButton>
            <RegionButton region="USA" selected={selectedIndex == 2} index={2} setSelectedRegionIndex={setSelectedRegionIndex}></RegionButton>
            <RegionButton region="Europe" selected={selectedIndex == 3} index={3} setSelectedRegionIndex={setSelectedRegionIndex}></RegionButton>
        </Flex>
    )
}