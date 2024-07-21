import { AskAIButtonSC } from "./AskAIButton";
import { Flex } from "./FlexCointainer";
import Header from "./Header";



export default function Navbar() {
    return (
        <>
            <div className="sm:hidden block ">
                <Flex $justifyContent="space-between" $alignItems="center" className="mt-5">
                    <img src="/avatar.svg"></img>
                    <img src="/brand.svg"></img>
                    <img src="/burger.svg"></img>
                </Flex>
            </div>
            <div className="sm:block hidden ">
                <Flex $justifyContent="space-between" $alignItems="center" className="my-5">
                    <Flex>
                        <img src="/avatar.svg"></img>
                        <img src="/brand.svg"></img>
                    </Flex>
                    <div style={{flexGrow: 0.7}}>
                        <img src="/search.svg"></img>

                    </div>
                    <Flex>
                        <AskAIButtonSC $backgroundColor="midnight"><img className="mb-1" src="/white-wand.svg"></img><span className="text">Ask AI</span></AskAIButtonSC>
                        <img src="/burger.svg"></img>
                    </Flex>
                </Flex>
            </div>
        </>
    )
}