import * as grpc from '@grpc/grpc-js';
import { NameClient } from '@protos/name_grpc_pb';
import loadService from './service-loader';

const service = new NameClient(
  'localhost:3334',
  grpc.credentials.createInsecure(),
);

export default service;
