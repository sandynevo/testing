import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef } from '@angular/core';

/*
 * Core and Environment providers/directives/pipes
 */
import { CoreServicesModule } from 'angular2-nexus-uiux';
import { CoreAppModule } from 'angular2-nexus-uiux';
import { AppStateService, AppConfigService, AppConfig  } from 'angular2-nexus-uiux/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import 'ddl/styles.global.scss';

import { CitiModule } from 'uicomponents/citi.module';
//import { BrandingModule } from "uicomponents/branding/branding.module";

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    AppRoutingModule,
    CoreServicesModule,
    CitiModule 
  ]
})
export class AppModule extends CoreAppModule {

  	constructor(public appRef: ApplicationRef, public appStateService: AppStateService, public appConfigService: AppConfigService) {
  		  super(appRef, appStateService);
      
        let appConfig: AppConfig;
        if ('production' === ENV) {
            appConfig = require('../../config/app-config.prod').config;
        } else if ('development' === ENV) {
            appConfig = require('../../config/app-config.dev').config;
        } else {
            appConfig = require('../../config/app-config.test').config;
        }
        appConfigService.setAppConfig(appConfig);
  	}
  
}

