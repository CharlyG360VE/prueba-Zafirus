import { Component, Input, OnInit } from '@angular/core';
import { HeroesUseCase } from '@use-cases/heroes/heroes.use-cases';
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle } from '@ionic/angular/standalone';
import { IHeroe } from '@models/heroes/heroes.model';

@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
  ]
})
export default class HeroeDetailComponent implements OnInit {

  @Input() private readonly id = '';

  public heroe?: IHeroe

  constructor(private readonly _heroesUseCase: HeroesUseCase) {}

  ngOnInit() {
    this.getHeroDetail();
  }

  private async getHeroDetail() {
    const { results } = await this._heroesUseCase.getHeroeById(this.id);
    this.heroe = results[0];
  }

}
