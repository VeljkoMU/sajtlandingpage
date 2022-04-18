import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations:[
    trigger('slide', [
      transition(
        ':enter', [
          style({opacity: 0}),
          animate('1.5s', style({opacity: 1}))
        ]),
        transition(':leave', [
          animate(300, style({opacity: 0}))
        ])
    ]

    )
  ]
})
export class ServicesComponent implements OnInit {

  public num:string="web";
  constructor() { }

  ngOnInit(): void {
  }

  public go(service: string){
    let temp = this.num;
    this.num="";
    temp=service;
    setTimeout(()=>this.num=temp,300);
  }

}
