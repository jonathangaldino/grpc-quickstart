import * as grpc from '@grpc/grpc-js';
import { GreeterClient } from '@protos/hello_grpc_pb';
import { HelloRequest, HelloReply } from '@protos/hello_pb';

const service = new GreeterClient(
  'localhost:3334',
  grpc.credentials.createInsecure(),
);

export const sayHello = async (name: string) => {
  const request = new HelloRequest();
  request.setName(name);

  return new Promise((resolve, reject) => {
    service.sayHello(request, (err, response) => {
      if (err) {
        reject(err);
      }

      resolve(response);
    });
  });
};
