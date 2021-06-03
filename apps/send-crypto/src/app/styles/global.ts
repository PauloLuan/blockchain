import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--primary);
  }
  ul {
    list-style: none;
  }

  :root {
    --primary: #fff;
  }

`
