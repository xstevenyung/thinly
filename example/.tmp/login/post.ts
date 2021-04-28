import validation from '@thinly/validation'
import type { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

export const body = {
  username: validation.string().required(),
}

export default async (req: Request, res: Response) => {
  const user = await db.user.findFirst({
    where: { username: req.body.username },
  })

  res.send(user)
}