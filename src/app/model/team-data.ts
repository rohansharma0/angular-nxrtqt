import { Result } from './result';
import { Team } from './team';

export class TeamData {
  team: Team;
  results: Result[];
  avgPointScored: number;
  avgPointConceded: number;
}
