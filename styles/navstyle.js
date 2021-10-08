import { css } from '@emotion/react';

export const navStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Oswald:500');
  /* display: flex;
  justify-content: center;
  align-items: center; */

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
    .Garage {
      display: flex;
      align-items: center;
      flex-direction: column;
      position: relative;
    }
  }

  div {
    font-family: 'Oswald', sans-serif;
    background-color: black;
    color: white;
    width: 130px;
    font-size: 10px;
    position: relative;
    top: 10px;
  }
`;
