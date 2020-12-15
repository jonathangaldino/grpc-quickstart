import { Request, Response } from 'express';
import { JoinNamesRequest } from '@protos/name_pb';
import NameService from '../services/name-service';

export const joinNames = async (req: Request, res: Response) => {
  const { name, surname } = req.body;

  console.log({ body: { name, surname } });

  if (!name || !surname) {
    return res.status(400).json({ status: 'error', message: 'missing fields' });
  }

  const grpcRequest = new JoinNamesRequest();
  grpcRequest.setName(name);
  grpcRequest.setSurname(surname);

  // Constroi a request
  NameService.joinNames(grpcRequest, (err, response) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.json({ fullname: response.getFullname() });
  });
};
