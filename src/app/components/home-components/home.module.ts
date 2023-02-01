import {NgModule} from "@angular/core";
import {MashComponent} from "src/app/components/home-components/mash/mash.component";
import {CommonModule} from "@angular/common";
import {ScoreBoardComponent} from "src/app/components/home-components/score-board/score-board.component";
import {CatMashApiServices} from "../../services/cat-mash-api.services";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScoreBoardComponent,
    MashComponent
  ],
  providers: [CatMashApiServices],
  exports: [ScoreBoardComponent, MashComponent]
})
export class HomeModule { }
