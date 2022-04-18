import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public flashing:boolean = true;

  constructor(private title:Title) { }

  ngOnInit(): void {
    setInterval(()=>{
      this.flashing = !this.flashing;
      console.log(this.flashing);
    },500);

    this.title.setTitle("NaissDev");
  }

}
