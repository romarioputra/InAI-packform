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
const isPositive = (percentage) => percentage >= 0
const parseText = (percentage) => percentage >= 0 ? `+${percentage}%` : `${percentage}%`
const iconFileName = (percentage) => percentage >= 0 ? '/gain.svg' : '/loss.svg'

function ChangeIcon({percentage}) {
    return <img src={iconFileName(percentage)}></img>
}

export default function ChangePercentageButton({ percentage, color }) {


    return (
        <>
            <ChangePercentageSC $positive={isPositive(percentage)} $color={color}>
                <ChangeIcon percentage={percentage}></ChangeIcon> <span className="text">{parseText(percentage)}</span>
            </ChangePercentageSC>
        </>
    )
}