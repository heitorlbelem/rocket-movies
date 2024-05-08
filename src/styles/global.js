import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;

    font-family: 'Roboto Slab', serif;

    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${ ({ theme }) => theme.COLORS.GRAY_900 };
  }
`