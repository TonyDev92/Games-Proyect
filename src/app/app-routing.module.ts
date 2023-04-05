import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { FindTheTreasureComponent } from './pages/gamefind/find-the-treasure/find-the-treasure.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: "findTheTreasure", component: FindTheTreasureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
