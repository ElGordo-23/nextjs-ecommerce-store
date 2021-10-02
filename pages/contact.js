import Footer from '../Components/Footer.js';
import Header from '../Components/Header.js';
import { firstStyles } from '../styles/styles.js';

export default function Home() {
  return (
    <>
      <Header />
      <div css={firstStyles} />

      <Footer />
    </>
  );
}
