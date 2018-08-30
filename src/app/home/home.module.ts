import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule

  ],
  declarations: [HomeComponent, LineComponent, BarComponent, PieComponent]
})
export class HomeModule { }
