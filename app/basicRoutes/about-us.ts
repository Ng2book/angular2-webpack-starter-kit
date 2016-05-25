import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';
import {Address} from './address';
import {People} from './people';

@Component({
	template: `
    <h2>About Us</h2>
    <p>Developed by App2fusion.</p>
    <nav>
    	<a [routerLink]="['Address']">Adrress</a>
	    <a [routerLink]="['People']">People</a>
	</nav>
	<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/address', name: 'Address', component: Address },
	{ path: '/people', name: 'People', component: People, useAsDefault: true }
])
export class AboutUs { }