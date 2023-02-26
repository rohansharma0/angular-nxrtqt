import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class RapidApiService {
  public headers = new HttpHeaders({
    'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
  });

  public requestOptions = { headers: this.headers };

  constructor(private http: HttpClient) {}

  getTeamData() {
    return this.http.get(
      'https://free-nba.p.rapidapi.com/teams',
      this.requestOptions
    );
  }

  getTeamResultsByTeamId(teamId: string) {
    const date = 'dates[]=2022-12-06&dates[]=2022-12-05&dates[]=2022-12-04';
    return this.http.get(
      `https://free-nba.p.rapidapi.com/games?page=0&${date}&per_page=12&team_ids[]=${teamId}
    `,
      this.requestOptions
    );
  }
}
