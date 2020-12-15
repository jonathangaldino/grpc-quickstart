import * as gprc from '@grpc/grpc-js';
import { UserService, Empty, ListUsersResponse, IEmpty, IListUsersResponse } from '@protos'

interface UserHandler {
  listUsers: gprc.handleUnaryCall<IEmpty, IListUsersResponse>;
}

const implementation: UserHandler = {
  listUsers(request, callback) {
    const users = [{ id: '1', name: 'Jonathan', age: '21' }];

    const reply = new ListUsersResponse();
    reply.users = users;

    return callback(null, reply);
  }
}

export default implementation;