import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home-page/home/home.component';
import { FindTheTreasureComponent } from './pages/gamefind/find-the-treasure/find-the-treasure.component';
import { HeaderComponent } from './core/header/header.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { WhackAMoleComponent } from './pages/gamewhack/whack-a-mole/whack-a-mole.component';
import { WhoIsWhoComponent } from './pages/who-is-who/who-is-who.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FindTheTreasureComponent,
    HeaderComponent,
    WhackAMoleComponent,
    WhoIsWhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
