import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public flashing:boolean = true;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.flashing = !this.flashing;
      console.log(this.flashing);
    },500);
  }

}
