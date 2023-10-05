import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChartjsComponent} from "./pages/chartjs/chartjs.component";
import {EchartsComponent} from "./pages/echarts/echarts.component";
import {ApexComponent} from "./pages/apex/apex.component";
import {Ng2chartsComponent} from "./pages/ng2charts/ng2charts.component";

const routes: Routes = [
  {path: 'chartjs', component: ChartjsComponent},
  {path: 'echarts', component: EchartsComponent},
  {path: 'apex', component: ApexComponent},
  {path: 'ng2charts', component: Ng2chartsComponent},
  {path: '', redirectTo: 'chartjs', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
