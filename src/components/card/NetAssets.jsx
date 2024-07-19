import ChangePercentageButton from "../ChangePercentage";
import LastIntervalButton from "../LastInterval";
import { CardContentSC, CardHeaderSC, CardSC } from "./Card";

export default function NetAssetsCard({ net, gross, percent, liab }) {
    
    return (
        <CardSC $backgroundColor="purple" $light>
            <CardHeaderSC>
                <h3 className="title">Net assets</h3>
                <img src="/dot.svg" alt="" />
            </CardHeaderSC>
            <CardContentSC>
                <div>
                    <h2 className="nominal">{net}</h2>
                    <ChangePercentageButton percentage={percent}></ChangePercentageButton>
                    <LastIntervalButton></LastIntervalButton>
                </div>
                <img src="/caret-right.svg"></img>
            </CardContentSC>
        </CardSC>
    )
}