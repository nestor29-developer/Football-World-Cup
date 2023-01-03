export interface AwayTeam {
  name: string;
  finalScore: number;
  image: string;
  started: boolean;
  orderNumber: number;
  updated: boolean;
  removed: boolean;
  matchNumber: string;
}

export interface HomeTeam {
  name: string;
  finalScore: number;
  image: string;
  started: boolean;
  orderNumber: number;
  updated: boolean;
  removed: boolean;
  matchNumber: string;
}

export interface Match {
  homeTeam: HomeTeam;
  awayTeam: AwayTeam;
}
