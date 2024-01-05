import { css } from '@emotion/react';
import { theme } from 'styles/theme';

export const GlobalStyles = css`
  @font-face {
    font-family: KyivTypeSerif-Regular;
    src: url(../../public/fonts/KyivTypeSerif-Regular.woff2);
    font-weight: 400;
  }

  @font-face {
    font-family: KyivTypeSerif-Medium;
    src: url(../../public/fonts/KyivTypeSerif-Medium.woff2);
    font-weight: 500;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: KyivTypeSerif-Regular, sans-serif;
  }

  * {
    margin: 0;
    box-sizing: border-box;
  }

  *::selection {
    background-color: ${theme.colors.lightText};
    color: ${theme.colors.white};
  }

  body {
    background: ${theme.colors.background};
    min-height: 100vh;

    font-style: normal;
    line-height: 1;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
