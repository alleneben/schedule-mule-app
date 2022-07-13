// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../lib/prisma';

type Data = {
  status: boolean
  message?: string
  data?: object[]
}

export default  async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  try {
    res.status(200).json({ status: true, data: await prisma.user.findMany({ select: { firstname: true, lastname: true, email: true }}) })
  } catch (error) {
    res.status(400).json({ status: false, message: JSON.stringify(error)})
  }
}
