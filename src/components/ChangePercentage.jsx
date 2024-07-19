import styled from "styled-components";
import { ButtonSC } from "./Button";

const ChangePercentageSC = styled(ButtonSC)`
    background-color: ${p => p.$positive ? p.$color ?? "#22C55E" : p.$color ?? "#F43F5E"};
    padding: 4px 8px;
    max-width: 80px;
    
    .text {
        color: white;
    }
`

export default function ChangePercentageButton({percentage, color}) {
    const isPositive = (percentage) => percentage >= 0
    const parseText = (percentage) => percentage >= 0 ? `+${percentage}%` : `${percentage}%`

    return (
        <>
            <ChangePercentageSC $positive={isPositive(percentage)} $color={color}>
                <span className="text">{parseText(percentage)}</span>
            </ChangePercentageSC>
        </>
    )
}