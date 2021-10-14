import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Footer from '../Components/Footer.js';
import Header from '../Components/Header.js';

const menuStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  text-align: center;
  .Wrapper {
    text-align: center;
  }

  div {
    font-family: 'Oswald', sans-serif;
    height: auto;
    width: 300px;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }
  img {
    height: auto;
    width: 300px;
  }
  button {
    display: inline-block;
    border: 0.1em solid #ffffff;
    padding: 0.35em 1.2em;
    height: 50px;
    width: 150px;
    margin-top: 20px;
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    cursor: pointer;
  }
`;

export default function Home() {
  const router = useRouter();

  const routerPrototypes = () => router.push('/carList');
  const routerRallye = () => router.push('/rallyecarList');

  return (
    <>
      <Header />
      <div css={menuStyle}>
        <div className="Wrapper">
          <div>
            <h2>Prototypes</h2>
          </div>
          <img src="./images/marzal.jpg" alt="Lambo Marzal" />
          <button onClick={routerPrototypes}>See Prototypes</button>
        </div>
        <div className="Wrapper">
          <div>
            <h2>Rallyecars</h2>
          </div>
          <img src="./images/quattro.jpg" alt="Audi Quattro" />
          <button onClick={routerRallye}>See Rallyecars</button>
        </div>
      </div>

      <Footer />
    </>
  );
}
