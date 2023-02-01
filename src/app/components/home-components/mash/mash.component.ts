import {Component, OnInit, ViewChild} from "@angular/core";
import {CatMashApiServices} from "src/app/services/cat-mash-api.services";
import {Cat} from "src/app/models";
import {ScoreBoardComponent} from "../score-board/score-board.component";
import {Router} from "@angular/router";

@Component({
  selector: 'mash-component',
  templateUrl: './mash.component.html',
  styleUrls: ['./mash.component.scss']
})

export class MashComponent implements OnInit
{
  @ViewChild(ScoreBoardComponent)
  scoreBoard!: ScoreBoardComponent;

  title = "CatMash";
  currentDisplayedCats?: Cat[];

  constructor(private catMashService: CatMashApiServices, private router: Router) {}

  ngOnInit(): void {
    this.getRandomCat();
  }

  private getRandomCat(): void {
    this.catMashService.getRandomCats().subscribe({
      next: (res) => this.currentDisplayedCats = res
    })
  }

  onCatChosen(cat: Cat): void{
    this.scoreBoard.addCatToBoard(cat);
    // Refresh displayed cats
    this.getRandomCat();
  }

  async goToGlobalRanking(): Promise<void>{
    await this.router.navigate(["worldwide-scores"]);
  }
}
