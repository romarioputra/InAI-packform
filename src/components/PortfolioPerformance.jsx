import styled from "styled-components";
import ChangePercentageButton from "./ChangePercentage";
import PortfolioChangeButtonContainer from "./PortfolioChangeButton";
import { useMemo, useState } from "react";

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

function RowChange({interval, changeNominal, changePercentage}) {
    return (
        <div className="flex align-center justify-between py-3">
            <span>{interval}</span>
            <div>
                <span>{changeNominal}</span>
                <ChangePercentageButton percentage={changePercentage}></ChangePercentageButton>
            </div>
        </div>
    )
}

export default function RowChangeContainer({portfolioPerformance}) {
    const [selectedIndex, setSelectedIndex] = useState(2)
    const portfolioProperty = useMemo(() =>  {
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
            {selectedIndex}
            <PortfolioChangeButtonContainer selectedIndex={selectedIndex} onSelect={setSelectedIndex}></PortfolioChangeButtonContainer>
            <RowChange interval="Month" changeNominal={portfolioPerformance[portfolioProperty].month.nominal} changePercentage={portfolioPerformance[portfolioProperty].month.percentage}></RowChange>
            <LineBreak></LineBreak>
            <RowChange interval="Quarter" changeNominal={portfolioPerformance[portfolioProperty].quarter.nominal} changePercentage={portfolioPerformance[portfolioProperty].quarter.percentage}></RowChange>
            <LineBreak></LineBreak>
            <RowChange interval={fyTxt} changeNominal={portfolioPerformance[portfolioProperty].fy.nominal} changePercentage={portfolioPerformance[portfolioProperty].fy.percentage}></RowChange>
        </div>
    )
}

