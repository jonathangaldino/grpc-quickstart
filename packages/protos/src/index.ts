import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

export function loadProto(filename: string) {
  const packageDefinition = protoLoader.loadSync(
    path.resolve(__dirname, '..', 'pb', `${filename}.proto`),
    {
      keepCase: true,
      defaults: true,
    }
  );

  const proto = grpc.loadPackageDefinition(packageDefinition);

  return proto;
}
