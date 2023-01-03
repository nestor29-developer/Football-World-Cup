import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Match } from "../common/models/match";

export const Summary = ({ data }: { data: Match[] }) => {
  data.sort((a, b) => a.awayTeam.orderNumber - b.awayTeam.orderNumber);

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
        <Typography variant="h5" gutterBottom data-testid="title-summary">
          Summary of games by total score
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <List>
            {data &&
              data.length > 0 &&
              data.map(({ homeTeam }: any, index: number) =>
                homeTeam.updated ? (
                  <ListItem button key={`${homeTeam.name}-${index}`}>
                    <ListItemAvatar>
                      <Avatar
                        alt={`${homeTeam.name}-picture`}
                        src={homeTeam.image}
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
                      primary={homeTeam.name}
                      secondary={homeTeam.finalScore}
                    />
                  </ListItem>
                ) : null
              )}
          </List>
          <List>
            {data &&
              data.length > 0 &&
              data.map(({ awayTeam }: any, index) =>
                awayTeam.updated ? (
                  <ListItem button key={`${awayTeam.name}-${index}`}>
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
                      primary={awayTeam.name}
                      secondary={awayTeam.finalScore}
                    />
                    <ListItemAvatar sx={{ marginLeft: 1.8 }}>
                      <Avatar
                        alt={`${awayTeam.name}-picture`}
                        src={awayTeam.image}
                      />
                    </ListItemAvatar>
                  </ListItem>
                ) : null
              )}
          </List>
        </Box>
      </Box>
    ),
    [data]
  );
};
