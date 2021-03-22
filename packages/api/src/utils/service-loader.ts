import * as grpc from '@grpc/grpc-js';
import loadProto from '@services/loadProto';

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

  return client as ClientType;
}
