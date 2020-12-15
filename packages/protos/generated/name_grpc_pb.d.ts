// package: 
// file: name.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as name_pb from "./name_pb";

interface INameService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    joinNames: INameService_IJoinNames;
}

interface INameService_IJoinNames extends grpc.MethodDefinition<name_pb.JoinNamesRequest, name_pb.JoinNamesResponse> {
    path: "/Name/JoinNames";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<name_pb.JoinNamesRequest>;
    requestDeserialize: grpc.deserialize<name_pb.JoinNamesRequest>;
    responseSerialize: grpc.serialize<name_pb.JoinNamesResponse>;
    responseDeserialize: grpc.deserialize<name_pb.JoinNamesResponse>;
}

export const NameService: INameService;

export interface INameServer {
    joinNames: grpc.handleUnaryCall<name_pb.JoinNamesRequest, name_pb.JoinNamesResponse>;
}

export interface INameClient {
    joinNames(request: name_pb.JoinNamesRequest, callback: (error: grpc.ServiceError | null, response: name_pb.JoinNamesResponse) => void): grpc.ClientUnaryCall;
    joinNames(request: name_pb.JoinNamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: name_pb.JoinNamesResponse) => void): grpc.ClientUnaryCall;
    joinNames(request: name_pb.JoinNamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: name_pb.JoinNamesResponse) => void): grpc.ClientUnaryCall;
}

export class NameClient extends grpc.Client implements INameClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public joinNames(request: name_pb.JoinNamesRequest, callback: (error: grpc.ServiceError | null, response: name_pb.JoinNamesResponse) => void): grpc.ClientUnaryCall;
    public joinNames(request: name_pb.JoinNamesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: name_pb.JoinNamesResponse) => void): grpc.ClientUnaryCall;
    public joinNames(request: name_pb.JoinNamesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: name_pb.JoinNamesResponse) => void): grpc.ClientUnaryCall;
}
