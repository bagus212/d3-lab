import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';

const routes: Routes = [{
  path:'',component:HomeComponent,children:[
    {path:'',redirectTo:'/line',pathMatch:'full'},
    {path:'line',component:LineComponent},
    {path:'bar',component:BarComponent},
    {path:'pie',component:PieComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
