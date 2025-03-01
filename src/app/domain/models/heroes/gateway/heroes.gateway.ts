import { IHeroesModel } from "../heroes.model";

export abstract class HeroesGateway {

  abstract getAllHeroes(): Promise<IHeroesModel>;
  abstract getHeroeById(id: string): Promise<IHeroesModel>;

}