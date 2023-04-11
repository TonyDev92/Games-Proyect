import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-page/home/home.component';
import { FindTheTreasureComponent } from './pages/gamefind/find-the-treasure/find-the-treasure.component';
import { WhackAMoleComponent } from './pages/gamewhack/whack-a-mole/whack-a-mole.component';
import { WhoIsWhoComponent } from './pages/who-is-who/who-is-who.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },{
    path: "findTheTreasure", component: FindTheTreasureComponent
  },{
    path: "whackamole", component: WhackAMoleComponent
  },{
    path: "whoiswho", component: WhoIsWhoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
