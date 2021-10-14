import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Countries, Payment } from '../Components/Dropdowns.js';
import Footer from '../Components/Footer.js';
import Header from '../Components/Header.js';
import {
  checkoutFieldStyles,
  checkoutListStyles,
  checkoutStyles,
  grandTotalStyle,
  lowerItemsStyle,
  wrapper,
  wrapper2,
} from '../styles/styles.js';
import { setParsedCookie } from '../util/cookies';

export default function Checkout(props) {
  const [checkoutCart, setCheckoutCart] = useState(props.cartArray);

  function calcGrandTotal() {
    return props.cartArray.reduce((accumulator, car) => {
      return accumulator + car.price * car.amount;
    }, 0);
  }
  const grandTotal = calcGrandTotal();

  const router = useRouter();

  const clear = () => {
    setParsedCookie('cart', []);
    setCheckoutCart([]);
    router.push('/thankyou');
  };

  return (
    <>
      <Header />
      <div css={wrapper}>
        <div css={wrapper2}>
          <div css={checkoutListStyles}>
            <div css={checkoutStyles}>
              <ul>
                {checkoutCart.map((car) => {
                  return (
                    <li key={`car-li-${car.id}`}>
                      <img src={`../images/${car.id}.jpg`} alt="a Car" />
                      <div>
                        <p>
                          {car.make} {car.model}
                        </p>
                        <p>
                          {new Intl.NumberFormat('de-DE', {
                            style: 'currency',
                            currency: 'EUR',
                          }).format(` ${car.price} `)}
                        </p>
                        <p className="Amount">{car.amount}x</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="CheckoutFields" css={checkoutFieldStyles}>
            <label>
              First Name
              <br />
              <input />
            </label>
            <label>
              Last Name
              <br />
              <input />
            </label>
            <label>
              Street
              <br />
              <input />
            </label>
            <label>
              Street Number
              <br />
              <input />
            </label>
            <label>
              Zip Code
              <br />
              <input />
            </label>
            <span>
              Country
              <br />
              <Countries />
            </span>
            <span>
              Payment Method
              <br />
              <Payment />
            </span>
            <label>
              Card Number
              <br />
              <input />
            </label>
            <label>
              Valid thru
              <br />
              <input />
            </label>
            <label>
              CVV
              <br />
              <input />
            </label>
          </div>
        </div>
        <div css={lowerItemsStyle}>
          <Link href="/garage">
            <a>
              <button>Return to Cart</button>
            </a>
          </Link>

          <div className="Total" css={grandTotalStyle}>
            <div>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(` ${grandTotal} `)}
            </div>
          </div>

          <button onClick={clear}>Purchase</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { getCars } = await import('../util/database');
  const { getRallyeCars } = await import('../util/database');

  const getcars = await getCars();
  const rallyecars = await getRallyeCars();
  const cars = getcars.concat(rallyecars);

  console.log(cars);

  const rawCookie = context.req.cookies.cart;
  const cookieArray = rawCookie ? JSON.parse(rawCookie) : [];

  const cartArray = cookieArray.map((p) => {
    const cartObject = cars.find((car) => car.id === p.id);

    return {
      id: cartObject.id,
      make: cartObject.make,
      model: cartObject.model,
      year: cartObject.year,
      price: cartObject.price,
      amount: p.amount,
      available: cartObject.available,
    };
  });

  return {
    props: { cars, cartArray, cookieArray },
  };
};
