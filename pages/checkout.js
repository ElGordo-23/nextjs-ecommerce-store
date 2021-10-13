import Cookies from 'js-cookie';
import Footer from '../Components/Footer.js';
import Header from '../Components/Header.js';

export default function Home(props) {
  function cookie() {
    try {
      return JSON.parse(Cookies.get('cart'));
    } catch (err) {
      return 'Cart Empty';
    }
  }

  const checkoutCookie = cookie();
  console.log(checkoutCookie);

  return (
    <>
      <Header />

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const { getCars } = await import('../util/database.js');
  const cars = await getCars();

  return {
    props: {
      cars,
    },
  };
}
