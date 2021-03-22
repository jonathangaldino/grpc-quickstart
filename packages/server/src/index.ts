import * as grpc from '@grpc/grpc-js';
import Greetings from './handlers/greetings';

type StartServerType = () => void;

export const startServer: StartServerType = (): void => {
  const server = new grpc.Server();

  /** Services */
  server.addService(Greetings.service, Greetings.implementation as any);

  server.bindAsync(
    'localhost:3334',
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        // eslint-disable-next-line no-console
        return console.error(err);
      }

      server.start();
      // eslint-disable-next-line no-console
      console.log(`gRPC listening on ${port}`);
    },
  );
};

startServer();
