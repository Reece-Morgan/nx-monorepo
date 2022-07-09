import { createGlobalStyle } from 'styled-components';

export const BaseStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        padding: 0 !important;
        margin: 0 !important;
        font-family: 'Barlow Condensed Regular', sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;
