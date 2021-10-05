import { css } from '@emotion/react';

export const navStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Oswald:500');

  nav {
    width: 100%;
    position: fixed;
    top: 50px;
    text-align: center;
  }
  nav a {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: #16151b;
    margin: 0 15px;
    font-size: 16px;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
  }
`;
