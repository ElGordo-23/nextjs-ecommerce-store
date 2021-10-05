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
            <p>{props.singleCar.price}$</p>
            <button>Add to Garage</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { getCar } = await import('../../util/database');

  const singleCar = await getCar(context.query.carId);

  // const singleCar = cars.find((car) => {
  //   return idFromUrl === car.id;
  // });

  return {
    props: {
      singleCar,
    },
  };
}
