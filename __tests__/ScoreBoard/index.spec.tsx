import React from "react";
import "@testing-library/jest-dom";
import { Match } from "../../components/common/models/match";
import { generateConnectedComponent } from "../../components/common/testUtils";
import { ScoreBoard } from "../../components/score-board";
import { Operation } from "../../components/common/enums";

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

describe("Home", () => {
  it("Should render component", () => {
    const { wrapper } = generateConnectedComponent(<ScoreBoard data={data} operationTye={Operation.START}/>);
    expect(wrapper).toBeTruthy();
  });
});
