import { NgModule }            from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreCommonModule } from 'angular2-nexus-uiux';


import { LoanAppComponent }    from './loanApp.component';
import { OfferService } from './offers.service';
import{ OfferSelectedComponent} from'../offerSelected/offer-select.component';
import{ ConfirmationComponent } from'../confirmation/confirmation.component'
import { CitiModule } from 'uicomponents/citi.module';



@NgModule({
    imports: [
    /*
      ANGULAR2-NEXUS-STARTER NOTE:
      Import the CoreCommonModule to have access to directives of Angular modules (like FormsModule, HttpModule, RouterModule, etc). 
    */
      CoreCommonModule,
      CitiModule,
      
    RouterModule.forChild([
      { path: 'offer/:id', component: OfferSelectedComponent },
      { path: 'confirm', component: ConfirmationComponent }

    ])
    ],
    declarations: [
    /*
      ANGULAR2-NEXUS-STARTER NOTE:
      Declare all the components of the sub app.
  */
      LoanAppComponent,
      OfferSelectedComponent,
      ConfirmationComponent
    ],
    providers: [
      //This service is only specific to Dashboard subapp
        OfferService
    ]

})
export class LoanModule {

}


