export class Result {
  date: string;
  home_team: {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
    name: string;
  };
  home_team_score: number;
  id: number;
  period: string;
  postseason: boolean;
  season: string;
  status: string;
  time: string;
  visitor_team: {
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    id: number;
    name: string;
  };
  visitor_team_score: number;
}
