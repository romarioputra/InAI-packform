import { useMemo, useState } from "react";
import ChangePercentageButton from "../ChangePercentage";
import LastIntervalButton from "../LastInterval";
import { CardContentSC, CardFooterSC, CardHeaderSC, CardSC } from "./Card";
import IntervalButtonContainer from "../IntervalButton";

export default function GrossIncomeCard({ grossIncome }) {
  const [selectedInterval, setSelectedInterval] = useState(3)
  const interval = useMemo(() => {
    let prop = 'fy'
    if (selectedInterval == 2) {
      prop = 'quarter'
    }
    return prop
  }, [selectedInterval])
    return (
        <CardSC $backgroundColor="white" $marginTop="18px">
            <CardHeaderSC>
                <h3 className="title">Gross income</h3>
                <img src="/dot.svg" alt="" />
            </CardHeaderSC>
            <CardContentSC>
                <div>
                    <h2 className="nominal">{grossIncome[interval].grossIncome}</h2>
                    <ChangePercentageButton percentage={grossIncome[interval].lastYearPercentageGain} subdued={true}></ChangePercentageButton>
                    <LastIntervalButton></LastIntervalButton>
                </div>
                <img src="/arrow-r-container.svg"></img>
            </CardContentSC>
            <CardFooterSC $subdued>
                <h4>Less expenses: <span className="nominal expense">{grossIncome[interval].lessExpenses}</span></h4>
                <h4>Net income: <span className="nominal">{grossIncome[interval].netIncome}</span></h4>
            </CardFooterSC>
            <IntervalButtonContainer selectedIndex={selectedInterval} setSelectedInterval={setSelectedInterval}></IntervalButtonContainer>
        </CardSC>
    )
}