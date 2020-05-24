import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle `
    ${normalize()}
    html{
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin-top: 20px;
        font-family: ${primaryFont};
    }

    main {
        widt: 90%;
        margin: 0 auto;
    }

    #root {
        padding-top: 20px;
    }
`