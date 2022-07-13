// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as crypto from 'crypto';

import { prisma } from '../../lib/prisma';

type Data = {
  status: boolean
  message: string
}

export default  async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  const { firstname, lastname, email, password, branchId, departmentId,  roleId } = req.body;

  try {
    await prisma.user.create({ data: { firstname, lastname, email, password: genPass(password), branchId, departmentId, roleId } })

    res.status(200).json({ status: true, message: 'user created successfully'})
  } catch (error) {
    res.status(400).json({ status: false, message: JSON.stringify(error)})
  }
}


export function genPass (password: string){
  const salt = crypto.randomBytes(12).toString('hex');
  const hashPass = crypto.pbkdf2Sync(password, salt, 30000, 32, 'sha256').toString('base64');
  return `pbkdf2-sha256$30000$${salt}$${hashPass}`;
}

// compare user passwords
export function verifyPass(password: string, testPass: string){
  const [algo, iterations, salt, hash] = testPass.split('$');
  const hashPass = crypto.pbkdf2Sync(password, Buffer.from(salt), +iterations, 32, 'sha256').toString('base64');
  return hash == hashPass;
}