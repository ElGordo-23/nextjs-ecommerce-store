import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

dotenvSafe.config();

function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    // When we're in development, make sure that we connect only
    // once to the database
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }

  return sql;
}
const sql = connectOneTimeToDatabase();

export async function getCars() {
  const cars = await sql`
    SELECT * FROM cars;
  `;
  return cars.map((car) => {
    return camelcaseKeys(car);
  });
}

export async function getCar(id) {
  const cars = await sql`
    SELECT
      *
    FROM
      cars
    WHERE
      id = ${id}
  `;
  return camelcaseKeys(cars[0]);
}

export async function getRallyeCars() {
  const rallyecars = await sql`
    SELECT * FROM rallyecars;
  `;
  return rallyecars.map((rcar) => {
    return camelcaseKeys(rcar);
  });
}
export async function getRallyeCar(id) {
  const rallyecar = await sql`
    SELECT
      *
    FROM
      rallyecars
    WHERE
      id = ${id}
  `;
  return camelcaseKeys(rallyecar[0]);
}
