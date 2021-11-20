import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '../Components/Footer.tsx';
import Header from '../Components/Header.js';
import { cartListStyles, cartStyle } from '../styles/styles.js';
import { setParsedCookie } from '../util/cookies';

export default function Garage(props) {
  const [cart, setCart] = useState(props.cartArray);

  console.log(cart);
  console.log(props.cartArray);

  const router = useRouter();

  const checkout = () => {
    router.push('/checkout');
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const removed = (id) => {
    const currentCookie = [...props.cookieArray];
    const newCookie = currentCookie.filter((p) => p.id !== id);
    setParsedCookie('cart', newCookie);
    setCart(newCookie);
    refreshPage();
  };

  function calcGrandTotal() {
    return props.cartArray.reduce((accumulator, car) => {
      return accumulator + car.price * car.amount;
    }, 0);
  }
  const grandTotal = calcGrandTotal();

  const clear = () => {
    setParsedCookie('cart', []);
    setCart([]);
    router.push('/');
  };

  return (
    <>
      <Header />
      <div css={cartStyle}>
        <div css={cartListStyles}>
          <ul>
            {cart.map((car) => {
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

                    <input type="Number" min="1" value={car.amount} />

                    <button onClick={() => removed(car.id)}>Remove</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="Checkout">
          <div className="GrandTotal">
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'EUR',
            }).format(` ${grandTotal} `)}
          </div>

          <button onClick={checkout}>Checkout</button>

          <button className="Clear" onClick={clear}>
            Clear Cart
          </button>
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
