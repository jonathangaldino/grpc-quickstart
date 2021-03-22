import { Request, Response } from 'express';
import { sayHello } from '../services/greetings-service';

export const hello = async (req: Request, res: Response) => {
  const { name } = req.query;

  await sayHello(<string>name);

  return res.json({ message: 'message received' });
};
