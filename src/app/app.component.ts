import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sajt';

  public s: string = "";

  public scroll(s: HTMLElement){
    s.scrollIntoView({behavior: "smooth"});
  }
}
