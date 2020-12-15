// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var name_pb = require('./name_pb.js');

function serialize_JoinNamesRequest(arg) {
  if (!(arg instanceof name_pb.JoinNamesRequest)) {
    throw new Error('Expected argument of type JoinNamesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JoinNamesRequest(buffer_arg) {
  return name_pb.JoinNamesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_JoinNamesResponse(arg) {
  if (!(arg instanceof name_pb.JoinNamesResponse)) {
    throw new Error('Expected argument of type JoinNamesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JoinNamesResponse(buffer_arg) {
  return name_pb.JoinNamesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var NameService = exports.NameService = {
  joinNames: {
    path: '/Name/JoinNames',
    requestStream: false,
    responseStream: false,
    requestType: name_pb.JoinNamesRequest,
    responseType: name_pb.JoinNamesResponse,
    requestSerialize: serialize_JoinNamesRequest,
    requestDeserialize: deserialize_JoinNamesRequest,
    responseSerialize: serialize_JoinNamesResponse,
    responseDeserialize: deserialize_JoinNamesResponse,
  },
};

exports.NameClient = grpc.makeGenericClientConstructor(NameService);
