import { Match } from "./models/match";

export const randomValue = (data: Match[]) => {
  return Math.floor(Math.random() * data.length);
};

export const saveLocalStorage = (
  randomMatch: number,
  availableMatches: Match[]
) => {
  if (randomMatch >= 0) localStorage.setItem("random", randomMatch.toString());
  if (availableMatches && availableMatches.length > 0) {
    localStorage.setItem("prevData", JSON.stringify(availableMatches));
    localStorage.setItem(
      "match",
      availableMatches[randomMatch].homeTeam.matchNumber
    );
  }
};

export const availableMatches = (data: Match[]) => {
  return data.filter((match) => {
    if (!match.awayTeam.updated && !match.awayTeam.removed) return match;
  });
};
