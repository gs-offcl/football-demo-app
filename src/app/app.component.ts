import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'football-demo-app';
  environmentName = '';
  environmentUrl = '';
  
  constructor() {
    this.environmentName = environment.environmentName;
    this.environmentUrl = environment.apiUrl;
  }
}
