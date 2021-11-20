import Footer from '../Components/Footer.tsx';
import Header from '../Components/Header.js';
import { firstStyles } from '../styles/styles.js';

export default function Home() {
  return (
    <>
      <Header />
      <div css={firstStyles}>Greetings Car People</div>

      <Footer />
    </>
  );
}
