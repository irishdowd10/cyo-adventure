import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormComponent } from './form/form.component';
import { GameStartComponent } from './game-start/game-start.component';

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
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
