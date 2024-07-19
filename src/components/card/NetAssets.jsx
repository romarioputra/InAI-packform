import { CardHeaderSC, CardSC } from "./Card";

export default function NetAssetsCard({ net, gross, percent, liab }) {
    
    return (
        <CardSC $backgroundColor="purple">
            <CardHeaderSC>
                <h3 className="title">Net assets</h3>
                <img src="/dot.svg" alt="" />
            </CardHeaderSC>
        </CardSC>
    )
}