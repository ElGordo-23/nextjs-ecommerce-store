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

// export const cars = [
//   {
//     id: '1',
//     year: '1967',
//     make: 'Lamborghini',
//     model: 'Marzal',
//     color: 'Silver',
//     engine: '2L I6',
//     img: '/images/lamborghini-marzal.jpg',
//     descr:
//       "The Lamborghini Marzal is a concept car, first presented by Lamborghini at the 1967 Geneva Motor Show. Designed by Marcello Gandini of Bertone, it was created to supply Ferruccio Lamborghini with a true four-seater car for his lineup which already included the 400GT 2+2 and the Miura. Mr. Lamborghini initially viewed the creation of the Marzal as advertising rather than a production model. The Marzal remained a one-off, though the general shape and many of the ideas would later be used in the Lamborghini Espada. The Marzal's styling was radical at the time of its introduction, with magazine Road & Track calling it a Bertone design so fresh that everything else looks old fashioned. ",
//     price: '2.100.000$',
//   },
//   {
//     id: '2',
//     year: '1968',
//     make: 'Alfa Romeo',
//     model: 'Carabo',
//     color: 'Green',
//     engine: '2L V8',
//     img: '/images/alfa_carabo.jpg',
//     descr:
//       "The Alfa Romeo Carabo is a concept car first shown at the 1968 Paris Motor Show. It was designed by Marcello Gandini, working for the Bertone design studio. The Carabo name is derived from the Carabidae beetles, as evoked by the car's iridescent green and orange coloring. The wedge design came into fashion in the late 1960s. The Carabo is often considered the winner of the 'Wedge War' award of 1968 and as the direct predecessor of the Lamborghini Countach and having heavily influenced many car designs to follow well into the next decade. It was never intended for production but was fully functional and showcased features never expressed in any other car design of its day, including its wedge design and scissor doors. It features a mid-mounted 2.0 L V8. The Carabo engine made 172 kW (233 PS) at 8,800 rpm and 200 Nm of torque at 7,000 rpm. This allowed it to be able to reach a top speed of 250 km/h (155 mph).",
//     price: '2.000.000$',
//   },
//   {
//     id: '3',
//     year: '1970',
//     make: 'Mercedes-Benz',
//     model: 'C-111',
//     color: 'Gold',
//     engine: '4Rotor',
//     img: '/images/mercedes-c111.jpg',
//     descr:
//       'The Mercedes-Benz C111 was a series of experimental automobiles produced by Mercedes-Benz in the 1960s and 1970s. The company was experimenting with new engine technologies, including Wankel engines, diesel engines, and turbochargers, and used the basic C111 platform as a testbed. Other experimental features included multi-link rear suspension, gull-wing doors and a luxurious interior with leather trim and air conditioning. The first version of the C111 was completed in 1969. The car used a fiberglass body shell and with a mid-mounted three-rotor direct fuel injected Wankel engine. The next C111 appeared in 1970. It used a four-rotor engine producing 257 kW (350 hp). The car reportedly could reach a speed of 300 km/h. ',
//     price: '10.000.000$',
//   },
//   {
//     id: '4',
//     year: '1971',
//     make: ' Lancia',
//     model: 'Stratos Zero',
//     color: 'Brown',
//     engine: '1.6L V4',
//     img: '/images/stratos2.jpg',
//     descr:
//       "The Lancia Stratos Zero (or 0) preceded the Lancia Stratos HF prototype by 12 months and was first shown to the public at the Turin Motor Show in 1970. The futuristic bodywork was designed by Marcello Gandini, head designer at Bertone, and featured a 1.6 L Lancia Fulvia V4 engine. The Lancia Stratos HF Zero was exhibited in Bertone's museum for many years. In 2011, it was sold during an auction in Italy for €761,600. It has been displayed in the exhibit Sculpture in Motion: Masterpieces of Italian Design at the Petersen Automotive Museum in Los Angeles. The car's body is wedge-shaped and finished in distinctive orange. It is unusually short in length (3.58 m (141 in)) and height (84 cm (33 in)), and it shares little with the production version. The Zero appeared in Michael Jackson's 1988 film Moonwalker. ",
//     price: '2.500.000$',
//   },
//   {
//     id: '',
//     year: '1970',
//     make: 'Ferrari',
//     model: '512 S Modulo ',
//     color: 'White',
//     engine: '5L V12',
//     img: '/images/stratos2.jpg',
//     descr:
//       'The Ferrari Modulo was a concept car, designed by Paolo Martin of Pininfarina and produced in 1970. It was originally shown at the Geneva Motor Show in 1970 in black and subsequently repainted white and displayed at the 1970 Turin Motor Show and the 1970 Osaka World Fair. The Modulo was not intended to be a racing prototype but as a futuristic styling exercise and research vehicle, which abandoned traditional styling and construction techniques in favor of futuristic ideas. It amazed the public at the time and it earned 22 international design awards. The Ferrari Modulo was based on a 512S chassis and running gear and featured a mid mounted Ferrari quad-cam 5 litre V12 engine, producing 550bhp at 8,500 rpm and a claimed maximum speed of 360km/h. ',
//     price: '2.500.000$',
//   },
// ];
