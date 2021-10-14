import Footer from '../Components/Footer.js';
import Header from '../Components/Header.js';
import { firstStyles } from '../styles/styles.js';

export default function Thankyour() {
  return (
    <>
      <Header />
      <div css={firstStyles}>Thank your for your purchase</div>

      <Footer />
    </>
  );
}
