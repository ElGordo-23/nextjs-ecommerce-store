import { css } from '@emotion/react';

export const firstStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Oswald:500');
  text-align: center;
  font-weight: bold;
  font-size: 35px;
  margin-top: 150px;
  font-family: 'Oswald', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
`;

export const listStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  h2 {
    text-align: center;
  }
  ul {
    list-style: none;
    margin-top: 100px;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }
  li {
    list-style: none;

    height: 300px;
    width: 300px;
    h2 a {
      font-family: 'Bebas-Neue', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      color: #16151b;
      font-size: 20px;
      letter-spacing: 1px;
      font-weight: bold;
      margin-top: 22px;
      text-decoration: none;
    }
    img {
      padding-top: 25px;
      padding-left: 25px;
      padding-right: 25px;
      width: 250px;
      height: 137.5px;
    }
    button {
      display: inline-block;
      border: 0.1em solid #ffffff;
      padding: 0.35em 1.2em;
      margin-top: 10px;
      margin-left: 100px;
      width: 100px;
      background-color: black;
      color: white;
      font-family: 'Roboto', sans-serif;
      text-align: center;
      cursor: pointer;
    }
    /* button:hover {
      border-right: 2px solid grey;
      border-bottom: 2px solid grey;
    } */
    p {
      font-family: 'Bebas-Neue', sans-serif;
      font-weight: 500;
      margin-left: 125px;
    }
  }
`;

export const singleCarPageStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 50px;

  .text {
    font-family: 'Bebas-Neue', sans-serif;
    font-weight: 500;
    color: #16151b;
    font-size: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    margin-top: 72px;
    text-decoration: none;
    text-align: justify;
    line-height: 130%;
    h1 {
      text-transform: uppercase;
    }
  }
  img {
    height: 350px;
    margin-top: 100px;
  }
  button {
    display: inline-block;
    border: 0.1em solid #ffffff;
    padding: 0.35em 1.2em;
    margin-top: 10px;
    width: 150px;
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    height: 50px;
    cursor: pointer;
  }
  input {
    display: inline-block;
    border: 0.1em solid #ffffff;
    padding: 0.35em 1.2em;
    margin-top: 10px;
    width: 150px;
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    height: 50px;
    cursor: pointer;
  }
`;

export const cartListStyles = css`
  margin: 50px;
  display: grid;
  justify-content: center;
  max-height: 500px;
  overflow-y: scroll;
  /* border: 5px solid black; */
  margin-top: 75px;

  ul li {
    @import url('https://fonts.googleapis.com/css?family=Oswald:500');
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    list-style: none;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1px;
    place-items: center;
    /* border: 1px solid black; */
    width: -moz-fit-content;

    button {
      display: inline-block;
      border: 0.1em solid #ffffff;
      padding: 0.35em 1.2em;
      margin-top: 10px;
      width: 80px;
      background-color: black;
      color: white;
      @import url('https://fonts.googleapis.com/css?family=Oswald:500');
      font-family: 'Oswald', sans-serif;
      text-transform: capitalize;
      text-align: center;
      height: 30px;
      cursor: pointer;
    }
    input {
      display: inline-block;
      border: 0.1em solid #ffffff;
      padding: 0.35em 1.2em;
      margin-top: 10px;
      width: 80px;
      background-color: black;
      color: white;
      @import url('https://fonts.googleapis.com/css?family=Oswald:500');
      font-family: 'Oswald', sans-serif;
      text-align: center;
      height: 30px;
      cursor: pointer;
    }
  }
  img {
    height: 120px;
  }
`;

export const cartStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .Checkout {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    gap: 20px;
  }

  .GrandTotal {
    width: 150px;
    height: 50px;
    display: inline-block;
    border: 0.1em solid black;
    padding: 0.35em 1.2em;
    margin-top: 10px;
    background-color: white;
    color: black;
    @import url('https://fonts.googleapis.com/css?family=Oswald:500');
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
  }
  button {
    display: inline-block;
    border: 0.1em solid black;
    padding: 0.35em 1.2em;
    margin-top: 10px;
    width: 150px;
    background-color: black;
    color: white;
    @import url('https://fonts.googleapis.com/css?family=Oswald:500');
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    text-align: center;
    height: 50px;
    cursor: pointer;
  }
`;
