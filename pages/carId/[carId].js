import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../Components/Footer.tsx';
import Header from '../../Components/Header.js';
import { singleCarPageStyles } from '../../styles/styles.js';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export default function CarId(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [], // create a state variable for the items in the car, uses the state of the cookie (|| [] avoids undefined cookie by setting it to an empty array if its 'empty')
  );

  const product = productsInCart.find(
    (productInCart) => productInCart.id === Number(props.singleCar.id),
  ); // defines the single product by the id assigned to it it the database, Number is there because the id in the returned object is a string

  const initAmount = product ? product.amount : 0;
  // initial amount of a product put in the cart, reads: initAmount is either the amout set by the user, or 0.

  const [quantitySelector, setQuantitySelector] = useState(initAmount);
  // the amount the user selects. starts with 0, is later set to the amount the user selects

  function addProductToCart() {
    if (quantitySelector === 0) {
      alert('Select at least 1');
    } else {
      // first fetch the current cart (the cart is the cookie)
      const currentCart = getParsedCookie('cart') || [];
      // these checks are there to update the amount of an item thats already in the cart.
      const isInCart = currentCart.some(
        (productInCart) => productInCart.id === Number(props.singleCar.id),
      );
      // if there is already an item of the same Id in the cart, this will set its amount to the updated quantity.
      if (isInCart) {
        const existingProduct = currentCart.find(
          (productInCart) => productInCart.id === Number(props.singleCar.id),
        );
        existingProduct.amount = quantitySelector;
        setParsedCookie('cart', currentCart);
      } else {
        // the above are checks if the item already exists in the cart. this below adds the new product to the cart, and the selected amount. so the newly created object has the keys id and amount.
        const newProductsInCart = [
          ...productsInCart, // spread operator adds stuff to an array
          { id: Number(props.singleCar.id), amount: Number(quantitySelector) }, // these values are then constituted in the cookie. every object in the cookie hast those values
        ];
        setParsedCookie('cart', newProductsInCart);
        setProductsInCart(newProductsInCart);
      }
    }
  }

  const price = ` ${props.singleCar.price}`;

  return (
    <>
      <Head>
        <title>
          {props.singleCar.make} {props.singleCar.model}
        </title>
      </Head>
      <div>
        <Header />
        <div css={singleCarPageStyles}>
          <div>
            <img src={`../images/${props.singleCar.id}.jpg`} alt="a Car" />
          </div>

          <div className="text">
            <h1>
              {props.singleCar.make} {props.singleCar.model}
            </h1>
            <h2>
              {props.singleCar.year}, {props.singleCar.engine}
            </h2>

            <p>{props.singleCar.descr}</p>
            <p>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(price)}
            </p>
            <input
              type="Number"
              min="1"
              max={props.singleCar.available}
              onChange={(e) => {
                setQuantitySelector(e.currentTarget.value);
              }}
            />
            <button onClick={addProductToCart}>Add to Garage</button>

            <Link href="/carList">
              <a>
                <button>Back</button>
              </a>
            </Link>

            <Link href="/garage">
              <a>
                <button>View Garage</button>
              </a>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { getCar } = await import('../../util/database');
  // const { getRallyeCar } = await import('../../util/database');

  const singleCar = await getCar(context.query.carId);
  // const rallyecar = await getRallyeCar(context.query.carId);

  return {
    props: {
      singleCar,
      // rallyecar,
    },
  };
}
