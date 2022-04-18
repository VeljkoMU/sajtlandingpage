import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sajt';

  public s: string = "";

  public appear:boolean = false;

  public flashing:boolean = true;


  ngOnInit(): void {
    setInterval(()=>{
      this.flashing = !this.flashing;
      console.log(this.flashing);
      this.appear=true;
    },500);

  }
  public scroll(s: HTMLElement){
    s.scrollIntoView({behavior: "smooth"});
  }
}
