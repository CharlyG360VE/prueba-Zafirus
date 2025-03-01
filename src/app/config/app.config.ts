import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, withComponentInputBinding } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app.routes';
import { CryptoUseCase } from '@use-cases/crypto/crypto.use-cases';
import { CryptoService } from '@driven-adapter/crypto/crypto.service';
import { HeroesUseCase } from '@use-cases/heroes/heroes.use-cases';
import { HeroesService } from '@driven-adapter/heroes/heroes.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideIonicAngular(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(PreloadAllModules)
    ),
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: CryptoUseCase,
      useClass: CryptoService
    },
    {
      provide: HeroesUseCase,
      useClass: HeroesService
    }
  ]
}