import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizService } from '../services/quiz.service';
import { PopoverComponent } from './popover/popover.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { MembersComponentModule } from './members/members.module'

@NgModule({
  declarations: [AppComponent, [PopoverComponent]],
  entryComponents: [[PopoverComponent]],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, NgxQRCodeModule],
  providers: [
    StatusBar,
    SplashScreen,
    QuizService,
    MembersComponentModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
