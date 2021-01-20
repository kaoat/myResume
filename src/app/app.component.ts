import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tanutchakorn Khaisang\'s Resume';
  name:string="";
  setName(name:string=""){
    this.name=name;
  }
}
