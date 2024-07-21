import { useState } from "react";
import { AskAIButtonSC } from "./AskAIButton";
import { Flex } from "./FlexCointainer";
import "./Navbar.css"
import Header from "./Header";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
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
                    <div style={{ flexGrow: 0.7 }}>
                        <img src="/search.svg"></img>

                    </div>
                    <Flex>
                        <AskAIButtonSC $backgroundColor="midnight"><img className="mb-1" src="/white-wand.svg"></img><span className="text">Ask AI</span></AskAIButtonSC>
                        <img src="/burger.svg" onClick={toggleSidebar} className="toggle-button"></img>
                        <span onClick={toggleSidebar} className={`close-button ${isOpen ? 'open' : ''} my-5`}>X</span>
                        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                            <Header></Header>
                        </div>
                    </Flex>
                </Flex>
            </div>
        </>
    )
}