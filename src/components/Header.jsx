import { Flex } from "./FlexCointainer";
import { Title } from "./SectionHeading";

export default function Header() {
    return (
        <Flex $justifyContent="space-between" $alignItems="center" className="my-5">
            <Title>Portfolio Dashboard</Title>
            <img src="/search.svg"></img>
        </Flex>
    )
}