import { Component } from '@angular/core';

@Component({ // component 
  selector: 'app-root', // TAG NAME 
  templateUrl: './app.component.html', // naam van html file 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chloé'; // {{ title }}
}
