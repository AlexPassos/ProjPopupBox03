import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjPopupBox03';
  cActive: string = '';

  fnAbrir(){
    this.cActive = 'active';
  }

  fnFechar(){
    this.cActive = '';
  }
}
