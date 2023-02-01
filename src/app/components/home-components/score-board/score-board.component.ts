import {Component, OnInit} from "@angular/core";
import {Cat, CatScore, CatScoreRequest} from "src/app/models";
import {CatMashApiServices} from "../../../services/cat-mash-api.services";

@Component({
  selector: 'score-board-component',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.html']
})

export class ScoreBoardComponent implements OnInit
{
  localScoreBoard: CatScore[] = [];
  allCatScores:CatScore[] = [];

  constructor(private catMashService: CatMashApiServices) {
  }

  ngOnInit(): void {
    this.getAllCatScores();
  }

  addCatToBoard(cat: Cat): void {
    let alreadyAddedCat = this.localScoreBoard.find(csb => csb.id == cat.id);
    if(alreadyAddedCat){
      alreadyAddedCat.score++;
    } else {
      const newCatScore: CatScore = {
        id: cat.id,
        url: cat.url,
        score: 1
      }
      this.localScoreBoard.push(newCatScore);
    }

    this.localScoreBoard = this.localScoreBoard.sort((a, b) => a.score >= b.score ? -1: 1);
  }

  saveBoard(): void {
    let request = this.localScoreBoard.map((csb) => {
      let catScoreRequest: CatScoreRequest = {
        id: csb.id,
        score: csb.score
      };
      return catScoreRequest
    });
    let response = this.catMashService.shareCatScores(request).subscribe();
  }

  private getAllCatScores(): void {
    this.catMashService.getAllCatsScores().subscribe({
      next: (res) => {
        this.allCatScores = res;
        this.allCatScores = this.allCatScores.sort((a, b) => a.score >= b.score ? -1: 1);
      }
    })
  }
}
