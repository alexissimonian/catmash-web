import {NgModule} from "@angular/core";
import {MashComponent} from "src/app/components/home-components/mash/mash.component";
import {CommonModule} from "@angular/common";
import {ScoreBoardComponent} from "src/app/components/home-components/score-board/score-board.component";
import {CatMashApiServices} from "src/app/services/cat-mash-api.services";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MashComponent,
    ScoreBoardComponent
  ],
  providers: [CatMashApiServices],
  exports: [MashComponent, ScoreBoardComponent]
})
export class HomeModule { }
