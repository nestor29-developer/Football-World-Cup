import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Match } from "../common/models/match";
import { randomValue, saveLocalStorage } from "../common/utils";
import { Operation } from "../common/enums";

export const ScoreBoard = ({
  data,
  operationTye,
}: {
  data: Match[];
  operationTye: string;
}) => {
  let availableMatches: Match[] = [];
  let randomMatch = 0;

  if (operationTye === Operation.START) {
    availableMatches = data.filter((match) => {
      if (!match.awayTeam.updated && !match.awayTeam.removed) return match;
    });
    randomMatch = randomValue(availableMatches);
    saveLocalStorage(randomMatch, availableMatches);
  } else if (operationTye === Operation.UPDATE) {
    const data: any = localStorage.getItem("prevData");
    const prevData = JSON.parse(data);
    availableMatches = prevData;
    const value = localStorage.getItem("random") as any;
    randomMatch = parseInt(value);
    saveLocalStorage(randomMatch, availableMatches);
  }

  return useMemo(
    () => (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 2,
        }}
      >
        {availableMatches && availableMatches.length > 0 ? (
          <>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
              The Game Starts
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <List>
                <ListItem
                  button
                  key={`${availableMatches[randomMatch].homeTeam.name}-${randomMatch}`}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={`${availableMatches[randomMatch].homeTeam.name}-picture`}
                      src={availableMatches[randomMatch].homeTeam.image}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primaryTypographyProps={{
                      style: { color: "#1f0d00", fontSize: 16 },
                    }}
                    secondaryTypographyProps={{
                      style: {
                        fontWeight: "bold",
                        color: "#505050",
                        fontSize: 26,
                        marginLeft: 42,
                      },
                    }}
                    primary={availableMatches[randomMatch].homeTeam.name}
                    secondary={
                      operationTye === Operation.START
                        ? 0
                        : availableMatches[randomMatch].homeTeam.finalScore
                    }
                  />
                </ListItem>
              </List>
              <List>
                <ListItem
                  button
                  key={`${availableMatches[randomMatch].awayTeam.name}-${randomMatch}`}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      style: { color: "#1f0d00", fontSize: 16 },
                    }}
                    secondaryTypographyProps={{
                      style: {
                        fontWeight: "bold",
                        fontSize: 26,
                        color: "#505050",
                      },
                    }}
                    primary={availableMatches[randomMatch].awayTeam.name}
                    secondary={
                      operationTye === Operation.START
                        ? 0
                        : availableMatches[randomMatch].awayTeam.finalScore
                    }
                  />
                  <ListItemAvatar sx={{ marginLeft: 1.8 }}>
                    <Avatar
                      alt={`${availableMatches[randomMatch].awayTeam.name}-picture`}
                      src={availableMatches[randomMatch].awayTeam.image}
                    />
                  </ListItemAvatar>
                </ListItem>
              </List>
            </Box>
          </>
        ) : null}
      </Box>
    ),
    [operationTye]
  );
};
