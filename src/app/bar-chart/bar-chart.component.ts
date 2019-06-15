import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[]=[
  {data:[65,32,45,31,85],label:'q3 sales'},
  {data:[12,39,31,90,33],label:'q4 sales'}
];
const SAMPLE_BARCHART_LABELS: string[]=['W1','W2','W3','W4','W5',];


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }
public barChartData:any[]=SAMPLE_BARCHART_DATA;
public barChartLabels: string[]= SAMPLE_BARCHART_LABELS;
public barChartType='bar';
public barChartLegend=true;
public barChartOptions:any={
  scaleShowVerticalLines:false,
  responsive:true
};
  ngOnInit() {
  }

}
