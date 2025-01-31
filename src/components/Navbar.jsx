import { useState } from "react";
import { AskAIButtonSC } from "./AskAIButton";
import { Flex } from "./FlexCointainer";
import Header from "./Header";
import AIQueryButtonContainer from "./AIQuery";
import ConfigurationButtonContainer from "./Config";
import AddInvestmentContainer from "./AddInvestment";
import { SectionTitle } from "./SectionHeading";
import { CloseSidebarToggle, Sidebar } from "./Sidebar";

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
                    </Flex>
                    <img src="/brand.svg"></img>
                    <Flex>
                        <AskAIButtonSC $backgroundColor="midnight"><img className="mb-1" src="/white-wand.svg"></img><span className="text">Ask AI</span></AskAIButtonSC>
                        <img src="/burger.svg" onClick={toggleSidebar} className="toggle-button"></img>
                        <CloseSidebarToggle onClick={toggleSidebar} $isOpen={isOpen} className="my-5">X</CloseSidebarToggle>
                        <Sidebar $isOpen={isOpen}>
                            <Header></Header>
                            <div className="pl-5">
                                <SectionTitle>New Investment</SectionTitle>
                                <AddInvestmentContainer></AddInvestmentContainer>
                            </div>
                            <div className="pl-5">
                                <AIQueryButtonContainer></AIQueryButtonContainer>
                            </div>
                            <div>
                                <ConfigurationButtonContainer></ConfigurationButtonContainer>
                            </div>
                        </Sidebar>
                    </Flex>
                </Flex>
            </div>
        </>
    )
}