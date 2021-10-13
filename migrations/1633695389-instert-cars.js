const cars = [
  {
    make: 'Lamborghini',
    model: 'Marzal',
    year: 1967,
    color: 'Silver',
    engine: '2L I6',
    descr: 'Lorem Ipsum',
    price: 2100000,
    available: 3,
  },
  {
    make: 'Alfa Romeo',
    model: 'Carabo',
    year: 1968,
    color: 'Green',
    engine: '2L V8',
    descr: 'Lorem Ipsum',
    price: 2000000,
    available: 5,
  },
  {
    make: 'Mercedes-Benz',
    model: 'C-111',
    year: 1970,
    color: 'Gold',
    engine: '4Rotor',
    descr: 'Lorem Ipsum',
    price: 10000000,
    available: 4,
  },
  {
    make: 'Lancia',
    model: 'Stratos Zero',
    year: 1971,
    color: 'Silver',
    engine: '1.4L V4',
    descr: 'Lorem Ipsum',
    price: 2500000,
    available: 4,
  },
  {
    make: 'Ferrari',
    model: '512 S Modulo',
    year: 1970,
    color: 'White',
    engine: '5L V12',
    descr: 'Lorem Ipsum',
    price: 2500000,
    available: 6,
  },
  {
    make: 'Maserati',
    model: 'Boomerang',
    year: 1971,
    color: 'Silver',
    engine: '4.7L V8',
    descr: 'Lorem Ipsum',
    price: 2100000,
    available: 8,
  },
  {
    make: 'Matra',
    model: 'Laser',
    year: 1971,
    color: 'Silver',
    engine: '1.7L V4',
    descr: 'Lorem Ipsum',
    price: 1100000,
    available: 6,
  },
  {
    make: 'BMW',
    model: 'Garmisch',
    year: 1970,
    color: 'Gold',
    engine: '3L I6',
    descr: 'Lorem Ipsum',
    price: 8100000,
    available: 2,
  },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO cars
   (make, model, year, color, engine, descr, price, available)
   VALUES
   ('Lamborghini', 'Marzal', 1967, 'Silver', '2L I6', 'Lorem Ipsum', 2100000, 3),
	 ('Alfa Romeo', 'Carabo', 1968, 'Green', '2L V8', 'Lorem Ipsum', 2000000, 5),
	 ('Mercedes-Benz', 'C-111', 1970, 'Gold', '4Rotor', 'Lorem Ipsum', 10000000, 4),
	 ('Lancia', 'Stratos Zero', 1971, 'Silver', '1.4L V4', 'Lorem Ipsum', 2500000, 4),
	 ('Ferrari', '512 S Modulo', 1970, 'White', '5L V12', 'Lorem Ipsum', 2500000, 6),
	 ('Maserati', 'Boomerang', 1971, 'Silver', '4.7L V8', 'Lorem Ipsum', 2100000, 8),
	 ('Matra', 'Laser', 1971, 'Silver', '1.7L V4', 'Lorem Ipsum', 1100000, 6),
	 ('BMW', 'Garmisch', 1970, 'Gold', '3L I6', 'Lorem Ipsum', 8100000, 2)`;
};

exports.down = async function down(sql) {
  for (const car of cars) {
    await sql`
      DELETE FROM
        cars
      WHERE
        make = ${car.make} AND model = ${car.model} AND year = ${car.year} AND color = ${car.color} AND engine =${car.engine} AND descr=${car.descr} AND price=${car.price} AND available=${car.available}
    `;
  }
};