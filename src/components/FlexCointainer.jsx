import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    column-gap: ${p => p.$columnGap ?? "10px"};
`