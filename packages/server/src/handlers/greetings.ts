import * as grpc from '@grpc/grpc-js';
import { sendUnaryData } from '@grpc/grpc-js/build/src/server-call';
import { HelloRequest, HelloReply } from '@protos/hello_pb';
import { IGreeterServer, GreeterService } from '@protos/hello_grpc_pb';

class GreetingsServer implements IGreeterServer {
  sayHello(
    call: grpc.ServerUnaryCall<HelloRequest, HelloReply>,
    callback: sendUnaryData<HelloReply>,
  ) {
    console.log(call);

    const reply = new HelloReply();
    reply.setMessage('Hello Jonathan');
    callback(null, reply);
  }

  sayHelloAgain(
    call: grpc.ServerUnaryCall<HelloRequest, HelloReply>,
    callback: sendUnaryData<HelloReply>,
  ) {
    console.log(call);

    const reply = new HelloReply();
    reply.setMessage('Hello again Jonathan');
    callback(null, reply);
  }
}

export default {
  service: GreeterService,
  implementation: new GreetingsServer(),
};
