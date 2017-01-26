import { NgModule }            from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from 'angular2-nexus-uiux';
import { CitiModule } from 'uicomponents/citi.module';

import { LoanAppComponent }    from './loanApp.component';
import { OfferService } from './offers.service';
import{ ConfirmationComponent } from'../comfirmation/confirmation.component'



@NgModule({
    imports: [
    /*
      ANGULAR2-NEXUS-STARTER NOTE:
      Import the CoreCommonModule to have access to directives of Angular modules (like FormsModule, HttpModule, RouterModule, etc). 
    */
      CoreCommonModule,
      CitiModule,
      
    RouterModule.forChild([
      { path: 'confirm', component: ConfirmationComponent }
    ])
    ],
    declarations: [
    /*
      ANGULAR2-NEXUS-STARTER NOTE:
      Declare all the components of the sub app.
  */
      
      ConfirmationComponent
    ],
    providers: [
      //This service is only specific to Dashboard subapp
         
    ]

})
export class OfferModule {

}


