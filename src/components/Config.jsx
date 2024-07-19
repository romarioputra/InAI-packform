// We assume "Customise" and "Widget" buttons are some sort of configuration for user

import styled from "styled-components";
import { AIQuerySC } from "./AIQuery";

const ConfigButtonSC = styled(AIQuerySC)`
    width: auto;

    .text {
        font-weight: 700;
    }
`

function CustomiseButton() {
    return (
        <>
            <ConfigButtonSC><img src="/customise.svg"></img> <span className="text">I Customise</span></ConfigButtonSC>
        </>
    )
}

function WidgetButton() {
    return (
        <>
            <ConfigButtonSC><img src="/widget.svg"></img> <span className="text">I Add Widget</span></ConfigButtonSC>
        </>
    )
}

export default function ConfigurationButtonContainer() {
    return (
        <div className="flex justify-center gap-x-2">
            <CustomiseButton></CustomiseButton>
            <WidgetButton></WidgetButton>
        </div>
    )
}