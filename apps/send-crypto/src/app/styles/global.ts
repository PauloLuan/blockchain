import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #fff;
    --red: #e52e4d;
    --blue-dark: #264653;
    --blue-light: #2a9d8f;
    --yellow: #e9c46a;
    --yellow-medium: #f4a261;
    --yellow-dark: #e76f51;

    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #FFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body,
  input,
  textarea,
  button {
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  html {
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
