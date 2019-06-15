import { Component, OnInit } from '@angular/core';

const SAMPLE_LINECHART_DATA: any[]=[
  {data:[65,32,45,31,85],label:'q3 sales'},
  {data:[12,39,31,90,33],label:'q4 sales'}
];

const SAMPLE_LINE_LABELS: string[]=['Jan','Feb','Mar','Apr','May',];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }

  lineChartData=SAMPLE_LINECHART_DATA;
  lineChartLabels=SAMPLE_LINE_LABELS;
  lineChartOptions:any={responsive:true};
  lineChartLegend=true;
  lineChartType='line';

  ngOnInit() {
  }

}
