import ChangePercentageButton from "../ChangePercentage";
import LastIntervalButton from "../LastInterval";
import { CardContentSC, CardFooterSC, CardHeaderSC, CardSC } from "./Card";

function Region({ region }) {
    if (region) {
        return <div className="flex gap-x-1"><img src={`/${region}.svg`}></img> <span className="text">{region}</span></div>
    }
    return null
}

export default function NetAssetsCard({ net, gross, percent, liab, region }) {
    return (
        <CardSC $backgroundColor="purple" $light>
            <CardHeaderSC>
                <div className="flex gap-x-2">
                    <Region region={region}></Region><h3 className="title">Net assets</h3>
                </div>
                <img src="/dot.svg" alt="" />
            </CardHeaderSC>
            <CardContentSC>
                <div>
                    <h2 className="nominal main-asset">{net}</h2>
                    <ChangePercentageButton percentage={percent} subdued={true}></ChangePercentageButton>
                    <LastIntervalButton></LastIntervalButton>
                </div>
                <img src="/caret-right.svg" style={{ marginRight: "15px" }}></img>
            </CardContentSC>
            <CardFooterSC $marginTop="10px">
                <h4>Gross assets: <span className="nominal">{gross}</span></h4>
                <h4>Liabilities: <span className="nominal expense">{liab}</span></h4>
            </CardFooterSC>
        </CardSC>
    )
}