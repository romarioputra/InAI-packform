// We assume "Customise" and "Widget" buttons are some sort of configuration for user

import styled from "styled-components";
import { AIQuerySC } from "./AIQuery";
import { Flex } from "./FlexCointainer";

const ConfigButtonSC = styled(AIQuerySC)`
    width: auto;

    .text {
        font-weight: 700;
    }
`

function CustomiseButton() {
    return (
        <>
            <ConfigButtonSC $border="gray" $transition="borderColor"><img style={{marginBottom: "2px"}} src="/customise.svg"></img> <span className="text">I Customise</span></ConfigButtonSC>
        </>
    )
}

function WidgetButton() {
    return (
        <>
            <ConfigButtonSC $border="gray" $transition="borderColor"><img style={{marginBottom: "2px"}} src="/widget.svg"></img> <span className="text">I Add Widget</span></ConfigButtonSC>
        </>
    )
}

export default function ConfigurationButtonContainer() {
    return (
        <Flex $columnGap="0.5rem" $justifyContent="center">
            <CustomiseButton></CustomiseButton>
            <WidgetButton></WidgetButton>
        </Flex>
    )
}