import { AppKey } from "@config/key.config";
import { enc, MD5 } from "crypto-js";

export class CriptoKeyHelper {

  public static get cryptoKey() {
    return enc.Hex.parse(MD5(AppKey.principalKey).toString())
  }

}