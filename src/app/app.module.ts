import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { FormComponent } from './form/form.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GameStartComponent } from './game-start/game-start.component';
import { SecondGoodComponent } from './second-good/second-good.component';
import { SecondBadComponent } from './second-bad/second-bad.component';
import { ThirdGoodGoodComponent } from './third-good-good/third-good-good.component';
import { ThirdGoodBadComponent } from './third-good-bad/third-good-bad.component';
import { ThirdBadGoodComponent } from './third-bad-good/third-bad-good.component';
import { ThirdBadBadComponent } from './third-bad-bad/third-bad-bad.component';
import { FinalComponent } from './final/final.component';
import { FinalBadComponent } from './final-bad/final-bad.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FormComponent,
    GameStartComponent,
    SecondGoodComponent,
    SecondBadComponent,
    ThirdGoodGoodComponent,
    ThirdGoodBadComponent,
    ThirdBadGoodComponent,
    ThirdBadBadComponent,
    FinalComponent,
    FinalBadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
