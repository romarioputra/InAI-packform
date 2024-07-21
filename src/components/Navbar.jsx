import { Flex } from "./FlexCointainer";

export default function Navbar() {
    return (
        <Flex $justifyContent="space-between" $alignItems="center" className="mt-5">
            <img src="/avatar.svg"></img>
            <img src="/brand.svg"></img>
            <img src="/burger.svg"></img>
        </Flex>
    )
}