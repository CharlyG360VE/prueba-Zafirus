import { ICryptoModel } from "@models/crypto/crypto.model";
import { CryptoGateway } from "@models/crypto/gateway/crypto.gateway";

export class CryptoUseCase {

  constructor(private readonly _cryptoGateway: CryptoGateway) {}

  public encrypt(value: string): ICryptoModel {
    return this._cryptoGateway.encrypt(value);
  }

}