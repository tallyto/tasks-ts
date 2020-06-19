import {getRepository} from 'typeorm'

import {Tasks} from '../entity/Tasks'

import {Request, Response} from 'express'

export const getTasks = async(req: Request, res: Response)=>{
  const tasks = await getRepository(Tasks).find()

  return res.json(tasks)
}

