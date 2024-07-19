import ChangePercentageButton from "../ChangePercentage";
import LastIntervalButton from "../LastInterval";
import { CardContentSC, CardFooterSC, CardHeaderSC, CardSC } from "./Card";

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
                    <ChangePercentageButton percentage={percent} subdued={true}></ChangePercentageButton>
                    <LastIntervalButton></LastIntervalButton>
                </div>
                <img src="/caret-right.svg" style={{ marginRight: "15px" }}></img>
            </CardContentSC>
            <CardFooterSC>
                <h4>Gross assets: <span className="nominal">{gross}</span></h4>
                <h4>Liabilities: <span className="nominal expense">{liab}</span></h4>
            </CardFooterSC>
        </CardSC>
    )
}