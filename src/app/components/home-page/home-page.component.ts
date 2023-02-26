import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { Team } from '../../model/team';
import { TeamData } from '../../model/team-data';
import { RapidApiService } from '../../services/rapid-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private rapidAPi: RapidApiService) {}

  teams: Team[] = [];

  teamsDataList: TeamData[] = [];

  form = new FormGroup({
    teamName: new FormControl('1'),
  });

  onSubmit() {
    let id = this.form.get('teamName').value;

    this.rapidAPi.getTeamResultsByTeamId(id).subscribe((res: any) => {
      let teamData = new TeamData();
      teamData.results = res.data;

      this.teams.forEach((team: Team) => {
        if (team.id === Number(id)) {
          teamData.team = team;
          console.log(team);
        }
      });

      let totalScoredPoint = 0;
      let totalConcededPoint = 0;

      teamData.results.forEach((result) => {
        if (result.home_team.id === Number(id)) {
          totalScoredPoint += result.home_team_score;
          totalConcededPoint += result.visitor_team_score;
        } else {
          totalConcededPoint += result.home_team_score;
          totalScoredPoint += result.visitor_team_score;
        }
      });

      teamData.avgPointScored = Math.abs(
        totalScoredPoint / teamData.results.length
      );
      teamData.avgPointConceded = Math.abs(
        totalConcededPoint / teamData.results.length
      );

      this.teamsDataList.push(teamData);
      console.log(this.teamsDataList);
    });
  }
  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams() {
    this.rapidAPi.getTeamData().subscribe((res: any) => {
      this.teams = res.data;
    });
  }
}
