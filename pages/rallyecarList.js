import Head from 'next/head';
import Link from 'next/link';
import Footer from '../Components/Footer.js';
import Header from '../Components/Header.js';
import { listStyle } from '../styles/styles.js';

export default function RallyeCarList(props) {
  return (
    <>
      <Head>
        <title>Cars</title>
      </Head>
      <Header />
      <div classname="Container" css={listStyle}>
        <ul>
          {props.rcars.map((car) => {
            return (
              <li key={`rallyecar-li-${car.id}`}>
                <h2>
                  <Link href={`/rallyecarId/${car.id}`}>
                    <a>
                      {car.make} {car.model}
                    </a>
                  </Link>
                  <img src={`../images/${car.id}.jpg`} alt="a Car" />
                </h2>
                <p>{car.year}</p>
                <Link Link href={`/rallyecarId/${car.id}`}>
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
  const { getRallyeCars } = await import('../util/database.js');
  const rcars = await getRallyeCars();

  return {
    props: {
      rcars,
    },
  };
}
