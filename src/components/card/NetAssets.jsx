import ChangePercentageButton from "../ChangePercentage";
import { Flex } from "../FlexCointainer";
import LastIntervalButton from "../LastInterval";
import { CardContentSC, CardFooterSC, CardHeaderSC, CardSC } from "./Card";

function Region({ region }) {
    if (region) {
        return <Flex $columnGap="0.25rem"><img src={`/${region}.svg`}></img> <span className="text">{region}</span></Flex>
    }
    return <h3 className="title">Net assets</h3>
}

export default function NetAssetsCard({ net, gross, percent, liab, region }) {
    return (
        <CardSC $backgroundColor="purple" $light>
            <CardHeaderSC>
                <Flex $columnGap="0.5rem">
                    <Region region={region}></Region>
                </Flex>
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