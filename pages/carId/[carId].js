import Head from 'next/head';
import Footer from '../../Components/Footer.js';
import Header from '../../Components/Header.js';
import { singleCarPageStyles } from '../../styles/styles.js';

export default function CarId(props) {
  return (
    <>
      <Head>
        <title>
          {props.singleCar.make} {props.singleCar.model}
        </title>
      </Head>
      <Header />
      <div css={singleCarPageStyles}>
        <div>
          <img src={props.singleCar.img} alt="a Car" />
        </div>

        <div className="text">
          <h1>
            {props.singleCar.make} {props.singleCar.model}
          </h1>
          <h2>
            {props.singleCar.year}, {props.singleCar.engine}
          </h2>

          <p>{props.singleCar.desc}</p>
          <p>{props.singleCar.price}</p>
          <button>Add to cart</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const { cars } = await import('../../util/database');

  const idFromUrl = context.query.carId;

  const singleCar = cars.find((car) => {
    return idFromUrl === car.id;
  });

  return {
    props: {
      singleCar,
    },
  };
}
