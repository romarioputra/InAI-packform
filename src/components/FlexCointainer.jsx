import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    flex-direction: ${p => p.$direction ?? 'row'};
    column-gap: ${p => p.$columnGap ?? "10px"};
    row-gap: ${p => p.$rowGap ?? "10px"};
    justify-content: ${p => p.$justifyContent};
    align-items: ${p => p.$alignItems};
`