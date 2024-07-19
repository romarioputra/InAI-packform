import { Title } from "./SectionHeading";

export default function Header() {
    return (
        <header className="flex justify-center align-center my-5">
            <Title>Portfolio Dashboard</Title>
            <img src="/search.svg"></img>
        </header>
    )
}