import styled, { css } from "styled-components"

export const CloseSidebarToggle = styled.span`
    position: fixed;
    top: 0;
    right: -500px;
    width: 500px;
    height: 100%;
    transition: right 0.3s ease;
    padding: 20px;
    box-sizing: border-box;
    z-index: 999;
    cursor: pointer;
    color: var(--pf-gray);
    font-weight: 700;

    ${p => p.$isOpen ? css`right: 50px` : css``}
`

export const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: -500px;
    width: 500px;
    height: 100%;
    background-color: white;
    box-shadow: -2px 0 15px rgba(0, 0, 0, 0.1), -2px 0 6px rgba(0, 0, 0, 0.06);
    transition: right 0.3s ease;
    padding: 20px;
    box-sizing: border-box;
    z-index: 999;

    ${p => p.$isOpen ? css`right: 0` : css``}
`