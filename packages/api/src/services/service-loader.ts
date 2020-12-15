import { promisify } from 'util';

import * as grpc from '@grpc/grpc-js';
import { loadProto } from '@services/protos';

interface IGRPCMethod {
  (): void;
  originalName: string;
}

interface ILoadServiceDTO {
  serviceName: string;
  protoName: string;
  address: string;
  credentials?: grpc.ChannelCredentials;
}

export default function loadService<ClientType extends grpc.Client>({
  serviceName,
  protoName,
  address,
  credentials = grpc.credentials.createInsecure(),
}: ILoadServiceDTO) {
  const proto = loadProto(protoName);

  const client = new (proto[serviceName] as any)(address, credentials);

  // Promisify all client methods
  // (Object.entries(client.__proto__) as [[string, IGRPCMethod]]).map(
  //   ([prop, value]) => {
  //     if (value.originalName !== undefined) {
  //       client[prop] = promisify(value);
  //     }
  //   }
  // );

  return client as ClientType;
}
