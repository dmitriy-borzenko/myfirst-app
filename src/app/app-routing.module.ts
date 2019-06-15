import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionSalesComponent } from './section-sales/section-sales.component';
import { SectionOrdersComponent } from './section-orders/section-orders.component';
import { SectionHealthComponent } from './section-health/section-health.component';

const routes: Routes = [
  {path:'sales', component:SectionSalesComponent },
  {path:'orders', component:SectionOrdersComponent },
  {path:'health', component:SectionHealthComponent },

  {path:'', redirectTo:'/sales', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
