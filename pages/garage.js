import Cookies from 'js-cookie';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../Components/Footer.js';
import Header from '../Components/Header.js';
import { cartListStyles, cartStyle } from '../styles/styles.js';
import { getParsedCookie, setParsedCookie } from '../util/cookies';

export default function Garage(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  ); // this accesses the cookie for this page to use, its again set to an empty array if theres no item in the cart.
  // to continue, we declare the current cart for this page.
  const currentCart = [];

  // here we access the props (all cars, objects) first, have the function check if the id of an object in the cookie (the cart, filled by the user) matches the id of one in the props (all cars), and then push those which match into the current cart array. pruductsInCart is set in the [carId]-page, so the individual product page.

  props.cars.forEach((car) => {
    productsInCart.forEach((product) => {
      if (product.id === car.id) {
        currentCart.push({ ...car });
      } else {
        return null;
      }
    });
  });

  return (
    <>
      <Header />
      <div css={cartStyle}>
        <div css={cartListStyles}>
          <ul>
            {currentCart.map((car) => {
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
                    <input
                      type="Number"
                      min="1"
                      placeholder
                      value={productsInCart.amount}
                    />
                    <button
                      onClick={() => {
                        const removed = currentCart.filter((cars) => {
                          return cars.id !== car.id;
                        });
                        setProductsInCart(removed);
                        setParsedCookie('cart', removed);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Checkout">
          <div className="GrandTotal">Grand Total</div>
          <Link href="/checkout">
            <a>
              <button>Checkout</button>
            </a>
          </Link>
        </div>
      </div>

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
