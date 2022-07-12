import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-barchart-body-component',
  templateUrl: './barchart-body-component.component.html',
  styleUrls: ['./barchart-body-component.component.css']
})
export class BarchartBodyComponentComponent implements OnInit {
     title = 'dashbaord';
     chart: any = [];


  constructor() { }

  ngOnInit(){

    this.chart = new Chart('canvas', {
      type: 'line',

      data: {
        labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
        datasets: [
          {

            label: 'My First dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543],
            backgroundColor: 'red',
            borderColor: 'red',
            fill: false,
          },
          // {
          //   type: 'line',
          //   label: 'Dataset 2',
          //   backgroundColor: 'rgba(0,0,255,0.4)',
          //   borderColor: 'rgba(0,0,255,0.4)',
          //   data: [
          //     443, 256, 165, 100, 56, 65, 35, 543
          //   ],
          //   fill: true,
          // },
          {

            label: 'My Second dataset',
            data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
            backgroundColor: 'blue',
            borderColor: 'blue',
            fill: false,
          }
        ]
      }
    });


  }

}
