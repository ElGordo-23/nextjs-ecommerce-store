import Head from 'next/head';
import Link from 'next/link';
import Footer from '../Components/Footer.tsx';
import Header from '../Components/Header.js';
import { listStyle } from '../styles/styles.js';

export default function CarList(props) {
  return (
    <>
      <Head>
        <title>Cars</title>
      </Head>
      <Header />
      <div classname="Container" css={listStyle}>
        <ul>
          {props.cars.map((car) => {
            return (
              <li key={`car-li-${car.id}`}>
                <h2>
                  <Link href={`/carId/${car.id}`}>
                    <a>
                      {car.make} {car.model}
                    </a>
                  </Link>
                  <img src={`../images/${car.id}.jpg`} alt="a Car" />
                </h2>
                <p>{car.year}</p>
                <Link Link href={`/carId/${car.id}`}>
                  <a>
                    <button>View</button>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Footer />
      </div>
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
