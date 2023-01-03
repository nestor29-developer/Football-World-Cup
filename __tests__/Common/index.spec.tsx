import React from "react";
import "@testing-library/jest-dom";
import {
  availableMatches,
  randomValue,
  saveLocalStorage,
} from "../../components/common/utils";
import { Match } from "../../components/common/models/match";

const data: Match[] = [
  {
    homeTeam: {
      name: "team a",
      finalScore: 3,
      image: "",
      started: false,
      orderNumber: 0,
      updated: false,
      removed: false,
      matchNumber: "1",
    },
    awayTeam: {
      name: "team b",
      finalScore: 2,
      image: "",
      started: false,
      orderNumber: 0,
      updated: false,
      removed: false,
      matchNumber: "1",
    },
  },
  {
    homeTeam: {
      name: "team c",
      finalScore: 9,
      image: "",
      started: false,
      orderNumber: 0,
      updated: false,
      removed: false,
      matchNumber: "1",
    },
    awayTeam: {
      name: "team d",
      finalScore: 1,
      image: "",
      started: false,
      orderNumber: 0,
      updated: false,
      removed: false,
      matchNumber: "1",
    },
  },
];

describe("Utils", () => {
  it("Should works random functions", () => {
    const random = randomValue(data);
    expect(random).toBeGreaterThan(-1);
  });

  it("Should works saveLocalStorage functions", () => {
    const saved = saveLocalStorage(1, data);
    expect(saved).toBeUndefined();
  });

  it("Should works availableMatches functions", () => {
    const matches = availableMatches(data);
    expect(matches.length).toBeGreaterThan(0);
  });
});
