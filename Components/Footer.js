import { css } from '@emotion/react';

const footerStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Oswald:500');

  footer {
    width: 100%;
    /* bottom: 50px; */
    text-align: center;
  }
  div {
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: #16151b;
    margin: 0 15px;
    font-size: 16px;
    letter-spacing: 1px;
    position: absolute;
    display: inline-block;
    width: 100%;
    position: fixed;
    bottom: 0;
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <footer css={footerStyles}>
      <div>©2021 EL GORDO</div>
    </footer>
  );
}
