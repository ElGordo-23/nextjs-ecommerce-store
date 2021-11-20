import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../Components/Footer.tsx';
import Header from '../../Components/Header.js';
import { singleCarPageStyles } from '../../styles/styles.js';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export default function CarId(props) {
  const [productsInCart, setProductsInCart] = useState(
    getParsedCookie('cart') || [],
  );

  const product = productsInCart.find(
    (productInCart) => productInCart.id === Number(props.rallyecar.id),
  );

  const initAmount = product ? product.amount : 0;

  const [quantitySelector, setQuantitySelector] = useState(initAmount);

  function addProductToCart() {
    if (quantitySelector === 0) {
      alert('Select at least 1');
    } else {
      const currentCart = getParsedCookie('cart') || [];

      const isInCart = currentCart.some(
        (productInCart) => productInCart.id === Number(props.rallyecar.id),
      );

      if (isInCart) {
        const existingProduct = currentCart.find(
          (productInCart) => productInCart.id === Number(props.rallyecar.id),
        );
        existingProduct.amount = quantitySelector;
        setParsedCookie('cart', currentCart);
      } else {
        const newProductsInCart = [
          ...productsInCart,
          { id: Number(props.rallyecar.id), amount: Number(quantitySelector) },
        ];
        setParsedCookie('cart', newProductsInCart);
        setProductsInCart(newProductsInCart);
      }
    }
  }

  const price = ` ${props.rallyecar.price}`;

  return (
    <>
      <Head>
        <title>
          {props.rallyecar.make} {props.rallyecar.model}
        </title>
      </Head>
      <div>
        <Header />
        <div css={singleCarPageStyles}>
          <div>
            <img src={`../images/${props.rallyecar.id}.jpg`} alt="a Car" />
          </div>

          <div className="text">
            <h1>
              {props.rallyecar.make} {props.rallyecar.model}
            </h1>
            <h2>
              {props.rallyecar.year}, {props.rallyecar.engine}
            </h2>

            <p>{props.rallyecar.descr}</p>
            <p>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
              }).format(price)}
            </p>
            <input
              type="Number"
              min="1"
              max={props.rallyecar.available}
              onChange={(e) => {
                setQuantitySelector(e.currentTarget.value);
              }}
            />
            <button onClick={addProductToCart}>Add to Garage</button>
            <Link href="/rallyecarList">
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
  const { getRallyeCar } = await import('../../util/database');

  const rallyecar = await getRallyeCar(context.query.rallyecarId);

  return {
    props: {
      rallyecar,
    },
  };
}
