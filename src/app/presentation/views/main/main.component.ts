import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import { body, bodyOutline, bodySharp } from 'ionicons/icons';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    RouterLink,
    RouterLinkActive,
    IonApp,
    IonSplitPane,
    IonMenu,
    IonContent,
    IonList,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterLink,
    IonRouterOutlet
  ]
})
export class MainComponent {

  public appPages = [
    { title: 'Listado de heroes', url: '/heroes', icon: 'body' }
  ];

  constructor() {
    addIcons(
      {
        body,
        bodyOutline,
        bodySharp
      }
    );
  }

}
