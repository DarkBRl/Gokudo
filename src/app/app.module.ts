import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MidScreenComponent } from './mid-screen/mid-screen.component';
import { LobbyComponent } from './lobby/lobby.component';
import { RankComponent } from './rank/rank.component';
import { GuideComponent } from './guide/guide.component';
import { ForumComponent } from './forum/forum.component';

const routes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: 'rank', component: RankComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'forum', component: ForumComponent },
  { path: '', component: LobbyComponent }
];


@NgModule({
  declarations: [AppComponent, LoginComponent, MidScreenComponent, LobbyComponent, RankComponent, GuideComponent, ForumComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [BrowserModule, FormsModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
