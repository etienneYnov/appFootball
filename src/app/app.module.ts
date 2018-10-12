import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EquipePage } from '../pages/equipe/equipe';
import { JoueurPage } from '../pages/joueur/joueur';
import { AbsoluteDragDirective } from '../directives/absolute-drag/absolute-drag';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EquipePage,
    JoueurPage,
    AbsoluteDragDirective,
    CanvasDraw
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EquipePage,
    JoueurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }