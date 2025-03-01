import { Injectable } from '@angular/core';
import { ICryptoModel } from '@models/crypto/crypto.model';
import { CryptoGateway } from '@models/crypto/gateway/crypto.gateway';
import { MD5 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService extends CryptoGateway {

  constructor() {
    super();
  }

  override encrypt(value: string): ICryptoModel {
    return {
      value: MD5(value).toString()
    };
  }

}
