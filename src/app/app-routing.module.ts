import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MashComponent} from "src/app/components/home-components/mash/mash.component";

const routes: Routes = [
  { path: '', component: MashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
