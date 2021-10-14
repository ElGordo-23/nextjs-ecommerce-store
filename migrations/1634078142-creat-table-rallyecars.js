exports.up = async function up(sql) {
  await sql`
	CREATE TABLE rallyecars (
		id  integer ,
		make VARCHAR (25) NOT NULL,
		model VARCHAR (25) NOT NULL,
		year integer,
		engine VARCHAR (10),
		descr VARCHAR (1500) NOT NULL,
		price integer,
		available integer);`;
};

exports.down = async function down(sql) {
  await sql`DROP TABLE rallyecars`;
};
