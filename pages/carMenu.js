import { useRouter } from 'next/router';
import Footer from '../Components/Footer.tsx';
import Header from '../Components/Header.js';
import { menuStyle } from '../styles/styles.js';

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
