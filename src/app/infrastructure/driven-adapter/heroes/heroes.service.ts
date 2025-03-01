import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { AppKey } from '@config/key.config';
import { HeroesGateway } from '@models/heroes/gateway/heroes.gateway';
import { IHeroesModel } from '@models/heroes/heroes.model';
import { CryptoUseCase } from '@use-cases/crypto/crypto.use-cases';
import { randomNumber } from 'src/app/helpers/random-number.helper';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HeroesService extends HeroesGateway {

  constructor(private readonly _cryptoUseCase: CryptoUseCase) {
    super();
  }

  async getAllHeroes(): Promise<IHeroesModel> {
    const ts = randomNumber();
    const { value: hash } = this._cryptoUseCase.encrypt(`${ts}${AppKey.privateKeyMarvel}${AppKey.publicKeyMarvel}`);

    const { data } = await CapacitorHttp.get(
      {
        url: `${environment.urlApi}characters`,
        params: {
          'ts': `${ts}`,
          'apikey': AppKey.publicKeyMarvel,
          'hash': hash,
          'offset': '20'
        },
        connectTimeout: 240000,
        responseType: 'json'
      }
    )

    return data.data;
  }

  async getHeroeById(id: string): Promise<IHeroesModel> {
    const ts = randomNumber();
    const { value: hash } = this._cryptoUseCase.encrypt(`${ts}${AppKey.privateKeyMarvel}${AppKey.publicKeyMarvel}`);

    const { data } = await CapacitorHttp.get(
      {
        url: `${environment.urlApi}characters/${id}`,
        params: {
          'ts': `${ts}`,
          'apikey': AppKey.publicKeyMarvel,
          'hash': hash
        },
        connectTimeout: 240000,
        responseType: 'json'
      }
    )

    return data.data;
  }

}
