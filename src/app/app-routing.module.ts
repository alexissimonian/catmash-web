import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllScoresComponent} from "src/app/components/scores-components/all-scores/all-scores.component";
import {MashComponent} from "src/app/components/home-components/mash/mash.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MashComponent },
  { path: 'worldwide-scores', component: AllScoresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
