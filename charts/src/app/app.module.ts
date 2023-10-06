import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MenuComponent } from './pages/menu/menu.component';
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { ChartjsComponent } from './pages/chartjs/chartjs.component';
import { EchartsComponent } from './pages/echarts/echarts.component';
import { Ng2chartsComponent } from './pages/ng2charts/ng2charts.component';
import { ApexComponent } from './pages/apex/apex.component';
import {NgApexchartsModule} from "ng-apexcharts";
import { NgChartsModule } from 'ng2-charts';
import {provideClientHydration} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChartjsComponent,
    EchartsComponent,
    ApexComponent,
    Ng2chartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgApexchartsModule,
    NgChartsModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
