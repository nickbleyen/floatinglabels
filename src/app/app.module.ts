import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {ProductProvider} from '../providers/productprovider'
@NgModule({
  declarations: [
    MyApp,
      SettingsPage,
      ContactPage,
      HomePage,
      TabsPage,
      LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      SettingsPage,
      ContactPage,
      HomePage,
      TabsPage,
      LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ProductProvider]
})
export class AppModule {}
