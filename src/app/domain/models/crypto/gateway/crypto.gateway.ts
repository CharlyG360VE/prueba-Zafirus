import { ICryptoModel } from "../crypto.model";

export abstract class CryptoGateway {

  abstract encrypt(value: string): ICryptoModel;

}