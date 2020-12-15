// package: 
// file: name.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class JoinNamesRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): JoinNamesRequest;

    getSurname(): string;
    setSurname(value: string): JoinNamesRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinNamesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinNamesRequest): JoinNamesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinNamesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinNamesRequest;
    static deserializeBinaryFromReader(message: JoinNamesRequest, reader: jspb.BinaryReader): JoinNamesRequest;
}

export namespace JoinNamesRequest {
    export type AsObject = {
        name: string,
        surname: string,
    }
}

export class JoinNamesResponse extends jspb.Message { 
    getFullname(): string;
    setFullname(value: string): JoinNamesResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinNamesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: JoinNamesResponse): JoinNamesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinNamesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinNamesResponse;
    static deserializeBinaryFromReader(message: JoinNamesResponse, reader: jspb.BinaryReader): JoinNamesResponse;
}

export namespace JoinNamesResponse {
    export type AsObject = {
        fullname: string,
    }
}
