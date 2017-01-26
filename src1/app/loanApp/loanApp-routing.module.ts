import { NgModule }            from '@angular/core';
import { RouterModule, Routes }        from '@angular/router';

import { LoanModule }    from './loanApp.module';
import { LoanAppComponent }    from './loanApp.component';


/*
    ANGULAR2-NEXUS-STARTER NOTE:
    For Routing Modules related to modules with no sub modules follow the current example
*/
export const LOAN_ROUTES: Routes = [
	/*
      	ANGULAR2-NEXUS-STARTER NOTE:
      	Redirect to the first page for the module. 
  	*/
  	{ 
  		path: '', 
  		redirectTo: 'index', 
  		pathMatch: 'full' 
  	},
  	/*
    ANGULAR2-NEXUS-STARTER NOTE:
		Specify the path and the component for every page.
  	*/
  	{ 
  		path: 'index', 
  		component: LoanAppComponent
  	}
];

@NgModule({
  	imports: [
  		  RouterModule.forChild(LOAN_ROUTES),
        LoanAppComponent
  	]
})
export class LoanAppRoutingModule {}


