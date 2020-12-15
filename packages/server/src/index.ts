import * as grpc from '@grpc/grpc-js';

import { loadProto } from '@services/protos';
import user from './handlers/user';

const proto = loadProto('user');

type StartServerType = () => void;

export const startServer: StartServerType = (): void => {
  const server = new grpc.Server();

  /** Services */
  server.addService(user.service, user.handler);

  server.bindAsync(
    `localhost:3334`,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        return console.error(err);
      }

      server.start();
      console.log(`gRPC listening on ${port}`);
    }
  );
}

startServer();