/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html'
})
export class AppComponent {

	name = 'Main App Component';

  	constructor() {
        
    }

  	ngOnInit() {
		    console.log('Initial App Component');

  	}

}