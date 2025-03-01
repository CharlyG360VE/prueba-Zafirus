import { mode, pad } from "crypto-js";

export class CryptoConfig {

  public static readonly config = {
    mode: mode.ECB,
    padding: pad.Pkcs7
  };

}