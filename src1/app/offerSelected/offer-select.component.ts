import{ Component, OnInit } from '@angular/core';
import { IOffer } from '../loanApp/offer';
import { ActivatedRoute,Router } from '@angular/router';
import { OfferService } from '../loanApp/offers.service';
@Component({
 
    templateUrl: 'offer-select.component.html'
})
export class OfferSelectedComponent implements OnInit{
   
   pageTitle:string ='Offer Detial';
   offer: IOffer;
   errorMessage: string;
   
   constructor(private _offerService: OfferService, private _route: ActivatedRoute, private _router: Router){}
  
   ngOnInit(): void {
       let id = +this._route.snapshot.params['id'];
      this.pageTitle += `: ${id}`;
       this.getProduct(id);
   }
   OnBackClick():void{
       this._router.navigate(['/loan']);
      
   }
   getProduct(id:number){
       console.log("666666");
        this. _offerService.getOffer(id).subscribe(offer => {
        this.offer = offer;
    console.log(this.offer);}, error => this.errorMessage =<any>error);
             
   }
}