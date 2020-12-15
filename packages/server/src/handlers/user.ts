import { ListUsersResponse, User } from '@protos/user_pb'
import { UserServiceService } from '@protos/user_grpc_pb'

const implementation = {
  listUsers(_call: any, cb: any) {
    const user = new User()
    user.setName('Jonathan');
    user.setAge('21');
    user.setId('1');

    const users = new ListUsersResponse();
    users.addUsers(user, 0);

    return cb(null, users);
  }
}

export default {
  service: UserServiceService,
  handler: implementation
}