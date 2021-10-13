const rallyecars = [
  {
    make: 'Lancia',
    model: 'Delta S4',
    year: 1985,

    engine: '1.6L I4',
    descr: 'Lorem Ipsum',
    price: 2100000,
    available: 3,
  },
  {
    make: 'Lancia',
    model: '037',
    year: 1962,
    engine: '2L I4',
    descr: 'Lorem Ipsum',
    price: 2000000,
    available: 5,
  },
  {
    make: 'Lancia',
    model: 'Fulvia',
    year: 1970,

    engine: '1.6L V4',
    descr: 'Lorem Ipsum',
    price: 1000000,
    available: 4,
  },
  {
    make: 'Lancia',
    model: 'Stratos ',
    year: 1973,
    engine: '3L V6',
    descr: 'Lorem Ipsum',
    price: 2500000,
    available: 4,
  },
  {
    make: 'Audi',
    model: 'Quattro S1',
    year: 1985,
    engine: '2.1L I5',
    descr: 'Lorem Ipsum',
    price: 2500000,
    available: 6,
  },
  {
    make: 'Peugeot',
    model: '205 Turbo',
    year: 1984,
    engine: '1.8L I4',
    descr: 'Lorem Ipsum',
    price: 2100000,
    available: 8,
  },
  {
    make: 'Porsche',
    model: '911 SC RS',
    year: 1981,
    engine: '3L F6',
    descr: 'Lorem Ipsum',
    price: 1100000,
    available: 6,
  },
  {
    make: 'Ford',
    model: 'RS2000',
    year: 1984,
    engine: '1.8L I4',
    descr: 'Lorem Ipsum',
    price: 1100000,
    available: 2,
  },
];

exports.up = async function up(sql) {
  await sql`
	INSERT INTO rallyecars
   (make, model, year, engine, descr, price, available)
   VALUES
   ('Lancia', 'Delta S4', 1985, '1.6L I4', 'Lorem Ipsum', 2100000, 3),
	 ('Lancia', '037', 1982, '2L I4', 'Lorem Ipsum', 2000000, 5),
	 ('Lancia', 'Fulvia', 1970, '1.6L V4', 'Lorem Ipsum', 1000000, 4),
	 ('Lancia', 'Stratos HF', 1973, '2.4L V6', 'Lorem Ipsum', 2500000, 4),
	 ('Audi', 'Quattro S1', 1985, '2.1L I5', 'Lorem Ipsum', 2500000, 6),
	 ('Peugeot', '205 Turbo', 1984, '1.8L I4', 'Lorem Ipsum', 2100000, 8),
	 ('Porsche', '911 SC RS', 1981, '3L F6', 'Lorem Ipsum', 1100000, 6),
	 ('Ford', 'RS2000', 1984, '1.8L V4', 'Lorem Ipsum', 1100000, 2)`;
};

exports.down = async function down(sql) {
  for (const rallyecar of rallyecars) {
    await sql`
      DELETE FROM
        rallyecars
      WHERE
        make = ${rallyecar.make} AND model = ${rallyecar.model} AND year = ${rallyecar.year} AND engine =${rallyecar.engine} AND descr=${rallyecar.descr} AND price=${rallyecar.price} AND available=${rallyecar.available}
    `;
  }
};
