import { JoinNamesResponse, JoinNamesRequest } from '@protos/name_pb';
import { NameService } from '@protos/name_grpc_pb';
import { handleUnaryCall } from '@grpc/grpc-js';

interface Service {
  joinNames: handleUnaryCall<JoinNamesRequest, JoinNamesResponse>;
}

const implementation: Service = {
  joinNames(call, cb) {
    console.log(call.request);

    const name = call.request.getName() as string;
    const surname = call.request.getSurname() as string;

    const response = new JoinNamesResponse();
    response.setFullname(`${name} ${surname}`);

    return cb(null, response);
  },
};

export default {
  service: NameService,
  handler: implementation,
};
