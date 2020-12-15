import { JoinNamesResponse, JoinNamesRequest } from '@protos/name_pb'
import { NameService } from '@protos/name_grpc_pb'

const implementation = {
  joinNames(call: any, cb: any) {    
    console.log(call.request.getName(), call.request.getSurname());

    const name = call.request.getName() as string;
    const surname = call.request.getSurname() as string;

    const response = new JoinNamesResponse();
    response.setFullname(`${name} ${surname}`);

    return cb(null, response);
  }
}

export default {
  service: NameService,
  handler: implementation
}