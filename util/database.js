import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

dotenvSafe.config();
const sql = postgres();

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
