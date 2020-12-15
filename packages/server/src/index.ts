import * as grpc from '@grpc/grpc-js';

import { loadProto } from '@services/protos';
import userImplementation from './handlers/user';

const proto = loadProto('user');

type StartServerType = () => void;

export const startServer: StartServerType = (): void => {
  const server = new grpc.Server();

  server.addService((proto['UserService'] as any).service, userImplementation);

  server.bindAsync(
    `localhost:3334`,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        return console.error(err);
      }

      console.log(`gRPC listening on ${port}`);
    }
  );

  server.start();
}

startServer();