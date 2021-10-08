// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getCars } from '../../util/database';

export default async function handler(req, res) {
  const cars = await getCars();
  res.status(200).json(cars);
}
