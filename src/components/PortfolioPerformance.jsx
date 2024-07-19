import styled from "styled-components";
import ChangePercentageButton from "./ChangePercentage";
import PortfolioChangeButtonContainer from "./PortfolioChangeButton";
import { useMemo, useState } from "react";

const IntervalText = styled.span`
    font-size: 14px;
    font-weight: 600;
    line-height: 30px;
`

const NominalText = styled(IntervalText)`
    font-weight: 700;
`

const LineBreak = styled.div`
    width: 100%;
    height: 1px;
    border-bottom: 1px solid #E2E8F0;
`

const Title = styled.h2`
    color: var(--pf-gray);
    font-weight: 700;
    line-height: 24px;
`

function RowChange({ interval, changeNominal, changePercentage }) {
    return (
        <div className="flex align-center justify-between py-3" style={{paddingLeft: "12px", paddingRight: "12px"}}>
            <IntervalText>{interval}</IntervalText>
            <div>
                <NominalText className="me-3">{changePercentage >= 0 ? '+' : ''}{changeNominal}</NominalText>
                <ChangePercentageButton percentage={changePercentage}></ChangePercentageButton>
            </div>
        </div>
    )
}

export default function RowChangeContainer({ portfolioPerformance }) {
    const [selectedIndex, setSelectedIndex] = useState(2)
    const portfolioProperty = useMemo(() => {
        let prop = 'all'
        if (selectedIndex == 1) {
            prop = 'realisedGains'
        }
        else if (selectedIndex == 2) {
            prop = 'unrealisedGains'
        }
        return prop
    }, [selectedIndex])
    const fyTxt = `FY ${new Date().getFullYear()}`
    return (
        <div>
            <Title>Portfolio Performance</Title>
            <PortfolioChangeButtonContainer selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></PortfolioChangeButtonContainer>
            <RowChange interval="Month" changeNominal={portfolioPerformance[portfolioProperty].month.nominal} changePercentage={portfolioPerformance[portfolioProperty].month.percentage}></RowChange>
            <LineBreak></LineBreak>
            <RowChange interval="Quarter" changeNominal={portfolioPerformance[portfolioProperty].quarter.nominal} changePercentage={portfolioPerformance[portfolioProperty].quarter.percentage}></RowChange>
            <LineBreak></LineBreak>
            <RowChange interval={fyTxt} changeNominal={portfolioPerformance[portfolioProperty].fy.nominal} changePercentage={portfolioPerformance[portfolioProperty].fy.percentage}></RowChange>
        </div>
    )
}

