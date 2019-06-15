import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[]=[350,450,500];
  pieChartLabels:string[]=['Hello people','Hello human','Hello animals'];
  pieChartColors:any[]=[
    {
      backgroundColor:['green','red','blue']
    }
  ];
  pieChartType='doughnut';

  ngOnInit() {
  }

}
