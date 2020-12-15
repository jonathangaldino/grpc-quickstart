import * as grpc from '@grpc/grpc-js';
import NameDomain from './handlers/name';

type StartServerType = () => void;

export const startServer: StartServerType = (): void => {
  const server = new grpc.Server();

  /** Services */
  server.addService(NameDomain.service, NameDomain.handler);

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