import { Request, Response } from 'express';
import GreetingsService from '../services/greetings-service';

export const hello = async (req: Request, res: Response) => {
  const { name } = req.query;

  const reply = await GreetingsService.sayHello(<string>name);

  const svMessage = reply.getMessage();

  return res.json({ message: svMessage });
};

export const helloAgain = async (req: Request, res: Response) => {
  const { name } = req.query;

  const reply = await GreetingsService.sayHelloAgain(<string>name);

  const svMessage = reply.getMessage();

  return res.json({ message: svMessage });
};
