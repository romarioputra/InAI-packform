import { css } from "styled-components"

export const backgroundColor = {
    blue: css`background-color: var(--pf-blue)`,
    lightBlue: css`background-color: var(--pf-light-blue)`,
    midnight: css`background-color: var(--pf-midnight)`,
    gray: css`background-color: var(--pf-gray)`,
    lightGray: css`background-color: var(--pf-light-gray)`,
    green: css`background-color: var(--pf-green)`,
    red: css`background-color: var(--pf-red)`,
    subGreen: css`background-color: var(--pf-sub-green)`,
    subRed: css`background-color: var(--pf-sub-red)`,
    white: css`background-color: white`
}

export const transition = {
    backgroundColor: css`transition: background-color 270ms linear`,
    borderColor: css`transition: border-color 270ms linear`
}

export const border = {
    transparent: css`border: 1px solid transparent`,
    gray: css`border: 1px solid var(--pf-sub-gray)`
}

export const color = {
    gray: css`
        .text {
            color: var(--pf-gray)
        }
    `,
    white: css`
        .text {
            color: white
        }
    `
}

export const textSize = {
    sm: css`
        .text {
            font-size: 12px;
            font-weight: 600;
            line-height: 27px;
        }
    `,
    md: css`
        .text {
            font-size: 14px;
            font-weight: 600;
            line-height: 26px;
        }
    `
}

export const baseButtonStyle = css`
    padding: 8px 12px;
    border-radius: 1234px;
    
    img {
        display: inline;
    }

    .text {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: -0.006em;
        text-align: left;
        color: #475569;
    }
`

// In this file I am trying to refactor (to prevent duplicate styling) for simple properties like above
// I do not refactor the hover / selected style because it is too complex for my liking (not complex from code side, but from DX)
// And I believe that hover and selected style are too personalized for each element, so I prefer it more to put it in each element file.