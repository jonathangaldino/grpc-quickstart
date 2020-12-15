// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_Empty(arg) {
  if (!(arg instanceof user_pb.Empty)) {
    throw new Error('Expected argument of type Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Empty(buffer_arg) {
  return user_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ListUsersResponse(arg) {
  if (!(arg instanceof user_pb.ListUsersResponse)) {
    throw new Error('Expected argument of type ListUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ListUsersResponse(buffer_arg) {
  return user_pb.ListUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  listUsers: {
    path: '/UserService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.Empty,
    responseType: user_pb.ListUsersResponse,
    requestSerialize: serialize_Empty,
    requestDeserialize: deserialize_Empty,
    responseSerialize: serialize_ListUsersResponse,
    responseDeserialize: deserialize_ListUsersResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
