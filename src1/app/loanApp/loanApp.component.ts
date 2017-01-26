import { Component,OnInit }   from '@angular/core';
import {IOffer} from'./offer';
import { OfferService} from './offers.service'

@Component({
  styleUrls: ['loanApp.component.css'],
  templateUrl: 'loanApp.component.html'
})
export class LoanAppComponent implements OnInit {

  pageTitle :string ="Your Custom Rate";
  purpose: string;
  term: string;
  offerlist: IOffer[];
  errorMessage: string;
  offerobj: number;


	constructor(private _offerService: OfferService) {
     
	}
  
  ngOnInit():void{
    console.log("---- init function -----");
    this._offerService.getOffers()
                .subscribe(
                  resp =>{
                    this.offerobj = resp['menu'].loanAmout;
                       this.offerlist = resp['menu'].offers;
                },
                           error => this.errorMessage = <any>error);
       console.log("---offerobj-"+ this.offerobj);
  }
  

}


