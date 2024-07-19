import styled, { css } from "styled-components";
import { ButtonSC } from "./Button";

const ChangePercentageSC = styled(ButtonSC)`
    background-color: ${p => p.$positive ? (p.$subdued ? css`var(--pf-sub-green)` : css`var(--pf-green)`) : (p.$subdued ? css`var(--pf-sub-red)` : css`var(--pf-red)`)};
    padding: 2px 6px;
    max-width: 80px;
    
    .text {
        font-size: 12px;
        font-weight: 600;
        line-height: 16px;
        color: ${p => p.$positive ? (p.$subdued ? css`var(--pf-green)` : 'white') : (p.$subdued ? css`var(--pf-red)` : 'white')};
    }
`
const isPositive = (percentage) => percentage >= 0
const parseText = (percentage) => percentage >= 0 ? `+${percentage}%` : `${percentage}%`
const iconFileName = (percentage, subdued) => percentage >= 0 ? (subdued ? '/gain-subdued.svg' : '/gain.svg') : (subdued ? '/loss-subdued.svg' : '/loss.svg')

function ChangeIcon({percentage, subdued}) {
    return <img src={iconFileName(percentage, subdued)}></img>
}

export default function ChangePercentageButton({ percentage, subdued }) {
    return (
        <>
            <ChangePercentageSC $positive={isPositive(percentage)} $subdued={subdued}>
                <ChangeIcon percentage={percentage} subdued={subdued}></ChangeIcon> <span className="text">{parseText(percentage)}</span>
            </ChangePercentageSC>
        </>
    )
}