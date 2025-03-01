import { HeroesGateway } from "@models/heroes/gateway/heroes.gateway";
import { IHeroesModel } from "@models/heroes/heroes.model";

export class HeroesUseCase {

  constructor(private readonly _heroesGateway: HeroesGateway) {}

  getAllHeroes(): Promise<IHeroesModel> {
    return this._heroesGateway.getAllHeroes();
  }

  getHeroeById(id: string): Promise<IHeroesModel> {
    return this._heroesGateway.getHeroeById(id);
  }

}