import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AllScoresComponent} from "src/app/components/scores-components/all-scores/all-scores.component";
import {CatMashApiServices} from "src/app/services/cat-mash-api.services";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AllScoresComponent
  ],
  providers: [CatMashApiServices],
  exports: [AllScoresComponent]
})
export class HomeModule { }
