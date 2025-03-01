import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/angular/standalone';
import { HeroesUseCase } from '@use-cases/heroes/heroes.use-cases';
import { IHeroe } from '@models/heroes/heroes.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonList,
    IonThumbnail
  ]
})
export default class HeroesComponent  implements OnInit {

  private readonly _router = inject(Router);

  public heroes: IHeroe[] = [];

  constructor(private readonly _heroesUseCase: HeroesUseCase) {}

  ngOnInit() {
    this.getAllHeroes();
  }

  public viewDetail(id: number) {
    this._router.navigate([ 'heroe-detail', id ]);
  }

  private async getAllHeroes() {
    const { results } = await this._heroesUseCase.getAllHeroes();

    this.heroes = results;
    console.log(this.heroes)
  }

}
