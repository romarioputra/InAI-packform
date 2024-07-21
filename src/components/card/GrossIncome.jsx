import { useMemo, useState } from "react";
import ChangePercentageButton from "../ChangePercentage";
import LastIntervalButton from "../LastInterval";
import { CardContentSC, CardFooterSC, CardHeaderSC, CardSC } from "./Card";
import IntervalButtonContainer from "../IntervalButton";
import styled from "styled-components";


// In production app, the text came from the server
const LastInterval = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-left: 4px;
    color: var(--pf-gray);
`

const Heading = styled.h3`
    color: var(--pf-gray);
`

export default function GrossIncomeCard({ grossIncome, marginTop = "18px", defaultSelectedIndex = 3 }) {
  const [selectedInterval, setSelectedInterval] = useState(defaultSelectedIndex)
  const interval = useMemo(() => {
    let prop = 'fy'
    if (selectedInterval == 2) {
      prop = 'quarter'
    }
    return prop
  }, [selectedInterval])
    return (
        <CardSC $backgroundColor="white" $marginTop={marginTop}>
            <CardHeaderSC>
                <Heading className="title">Gross income</Heading>
                <img src="/dot.svg" alt="" />
            </CardHeaderSC>
            <CardContentSC>
                <div>
                    <h2 className="nominal main-asset" style={{marginBottom: 0}}>{grossIncome[interval].grossIncome}</h2>
                    <ChangePercentageButton backgroundColor="transparent" percentage={grossIncome[interval].lastYearPercentageGain} subdued={true}></ChangePercentageButton>
                    <LastInterval>vs last year</LastInterval>
                </div>
                <img src="/arrow-r-container.svg"></img>
            </CardContentSC>
            <CardFooterSC $subdued $marginTop="0px">
                <h4>Less expenses: <span className="nominal expense">{grossIncome[interval].lessExpenses}</span></h4>
                <h4>Net income: <span className="nominal">{grossIncome[interval].netIncome}</span></h4>
            </CardFooterSC>
            <IntervalButtonContainer selectedIndex={selectedInterval} setSelectedInterval={setSelectedInterval}></IntervalButtonContainer>
        </CardSC>
    )
}