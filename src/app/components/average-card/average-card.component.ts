import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-card',
  templateUrl: './average-card.component.html',
  styleUrls: ['./average-card.component.css']
})
export class AverageCardComponent implements OnInit {

  @Input()
  linkImg:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
