import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormComponent } from './form/form.component';
import { GameStartComponent } from './game-start/game-start.component';
import { SecondGoodComponent } from './second-good/second-good.component';
import { SecondBadComponent } from './second-bad/second-bad.component';
import { ThirdGoodGoodComponent } from './third-good-good/third-good-good.component';
import { ThirdGoodBadComponent } from './third-good-bad/third-good-bad.component';
import { ThirdBadGoodComponent } from './third-bad-good/third-bad-good.component';
import { ThirdBadBadComponent } from './third-bad-bad/third-bad-bad.component';
import { FinalComponent } from './final/final.component';
import { FinalBadComponent } from './final-bad/final-bad.component';

const appRoutes: Routes = [
  {
      path: '',
      component: WelcomeComponent
    },
    {
    path: 'form',
    component: FormComponent
    },
    {
    path: 'game-start/:id',
    component: GameStartComponent
    },
    {
    path: 'second-good/:id',
    component: SecondGoodComponent
    },
    {
    path: 'second-bad/:id',
    component: SecondBadComponent
  },
    {
    path: 'third-good-good/:id',
    component: ThirdGoodGoodComponent
    },
    {
    path: 'third-good-bad/:id',
    component: ThirdGoodBadComponent
    },
    {
    path: 'third-bad-good/:id',
    component: ThirdBadGoodComponent
    },
    {
    path: 'third-bad-bad/:id',
    component: ThirdBadBadComponent
    },
    {
    path: 'final-good/:id',
    component: FinalComponent
    },
    {
    path: 'final-bad/:id',
    component: FinalBadComponent
    }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
