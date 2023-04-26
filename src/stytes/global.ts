import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
    :focus {
        outline: 0;
    }
    body {
        background-color: ${props => props.theme["gray-800"]};
        color: ${props => props.theme["gray-100"]};
    }
    body, input, textarea, button {
        font: 400 1rem Roboto, sans-serif;
    }
`