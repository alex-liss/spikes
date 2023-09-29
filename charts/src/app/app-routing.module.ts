import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartjsComponent} from "./pages/chartjs/chartjs.component";
import {EchartsComponent} from "./pages/echarts/echarts.component";
import {LwChartsComponent} from "./pages/lw-charts/lw-charts.component";
import {ApexComponent} from "./pages/apex/apex.component";

const routes: Routes = [
  {path: 'chartjs', component: ChartjsComponent},
  {path: 'echarts', component: EchartsComponent},
  {path: 'lw-charts', component: LwChartsComponent},
  {path: 'apex', component: ApexComponent},
  {path: '', redirectTo: 'chartjs', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
