import {Injectable } from '@angular/core';
import {IOffer } from './offer';
import {Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class OfferService{
    private offerUrl='api/offers/test.json';
    constructor(private _http:Http){}
    getOffers():Observable<IOffer[]>{
      console.log("inside service 1")
            return this._http.get(this.offerUrl).map((response: Response) => response.json())
            .do(data => console.log('All:' + JSON.stringify(data)))
            .catch(this.handleError);
    }
      getOffer(id:number):Observable<IOffer>{
      console.log("inside getOffer")
            let test= this.getOffers().map((offerList: any[]) =>offerList['menu'].offers.find(p => p.offerId === id)).do(data => console.log('All:' + JSON.stringify(data)));  
 //  console.log("test "+JSON.stringify(test));
return test;
 }


   private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }            

}