// here we are in our main component
import {Component} from 'angular2/core';

/* take a look at the @Component decorator
It has a selector: your custom html tag reference
and a template: html markups to be contained in the template
*/
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class AppComponent {

}