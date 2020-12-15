import { NameClient } from '@protos/name_grpc_pb';
import loadService from './service-loader';

export default loadService<NameClient>({
  serviceName: 'Name',
  protoName: 'name',
  address: 'localhost:3334',
});
