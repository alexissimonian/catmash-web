import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cat, CatScore, CatScoreRequest} from "src/app/models";
import {Observable} from "rxjs";

const baseUrl = "https://webapp-230201195100.azurewebsites.net/api/catmash";

@Injectable()
export class CatMashApiServices{

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private httpClient: HttpClient) {}

  public getRandomCats(): Observable<Cat[]>{
    return this.httpClient.get<Cat[]>(baseUrl);
  }

  public getAllCatsScores(): Observable<CatScore[]>{
    return this.httpClient.get<CatScore[]>(`${baseUrl}/worldwide-scores`);
  }

  public shareCatScores(catScores: CatScoreRequest[]): Observable<void> {
    return this.httpClient.post<void>(baseUrl, catScores);
  }
}
