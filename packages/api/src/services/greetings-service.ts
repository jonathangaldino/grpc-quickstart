import * as grpc from '@grpc/grpc-js';
import { GreeterClient } from '@protos/hello_grpc_pb';
import { HelloRequest, HelloReply } from '@protos/hello_pb';

const service = new GreeterClient(
  'localhost:3334',
  grpc.credentials.createInsecure(),
);

const sayHello = async (name: string): Promise<HelloReply> => {
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

const sayHelloAgain = async (name: string): Promise<HelloReply> => {
  const request = new HelloRequest();
  request.setName(name);

  return new Promise((resolve, reject) => {
    service.sayHelloAgain(request, (err, response) => {
      if (err) {
        reject(err);
      }

      resolve(response);
    });
  });
};

const GreetingsService = { sayHello, sayHelloAgain };

export default GreetingsService;
