import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders:Order[]=[
    {id:1,customer:
      {id:1,name:'Billy',state:'Co',email:'google@dfff.com'},
      total:230,placed:new Date(2017,12,1), 
      fulfilled:new Date(2017,12,3)},
      {id:2,customer:
        {id:2,name:'John',state:'Cy',email:'google@dfff.com'},
        total:480,placed:new Date(2017,12,5), 
        fulfilled:new Date(2010,12,8)}
  
  ];

  ngOnInit() {
  }

}
