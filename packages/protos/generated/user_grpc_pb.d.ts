// package: 
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as user_pb from "./user_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    listUsers: IUserServiceService_IListUsers;
}

interface IUserServiceService_IListUsers extends grpc.MethodDefinition<user_pb.Empty, user_pb.ListUsersResponse> {
    path: "/UserService/ListUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Empty>;
    requestDeserialize: grpc.deserialize<user_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.ListUsersResponse>;
    responseDeserialize: grpc.deserialize<user_pb.ListUsersResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    listUsers: grpc.handleUnaryCall<user_pb.Empty, user_pb.ListUsersResponse>;
}

export interface IUserServiceClient {
    listUsers(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    listUsers(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public listUsers(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
    public listUsers(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.ListUsersResponse) => void): grpc.ClientUnaryCall;
}
